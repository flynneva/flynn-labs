import datetime
import os

from flask import Flask, render_template, request
from google.auth.transport import requests
from google.cloud import datastore
import google.oauth2.id_token

firebase_request_adapter = requests.Request()

datastore_client = datastore.Client()

app = Flask(__name__)

firebaseConfig = {}
# get env vars for firebase login
firebaseConfig["apiKey"] = os.getenv('FIREBASE_API_KEY')
firebaseConfig["authDomain"] = os.getenv('FIREBASE_AUTH_DOMAIN')
firebaseConfig["databaseURL"] = os.getenv('FIREBASE_DATABASE_URL')
firebaseConfig["projectId"] = os.getenv('FIREBASE_PROJECT_ID')
firebaseConfig["storageBucket"] = os.getenv('FIREBASE_STORAGE_BUCKET')
firebaseConfig["messagingSenderId"] = os.getenv('FIREBASE_MESSAGING_SENDER_ID')
firebaseConfig["appId"] = os.getenv('FIREBASE_APP_ID')
firebaseConfig["measurementId"] = os.getenv('FIREBASE_MEASUREMENT_ID')

def store_time(email, dt):
    entity = datastore.Entity(key=datastore_client.key('User', email, 'visit'))
    entity.update({
        'timestamp': dt
    })

    datastore_client.put(entity)


def fetch_times(email, limit):
    ancestor = datastore_client.key('User', email)
    query = datastore_client.query(kind='visit', ancestor=ancestor)
    query.order = ['-timestamp']

    times = query.fetch(limit=limit)

    return times


@app.route('/')
def root():
    # Verify Firebase auth.
    id_token = request.cookies.get("token")
    error_message = None
    claims = None
    times = None

    if id_token:
        try:
            claims = google.oauth2.id_token.verify_firebase_token(
                id_token, firebase_request_adapter)

            store_time(claims['email'], datetime.datetime.now())
            times = fetch_times(claims['email'], 10)

        except ValueError as exc:
            error_message = str(exc)

    return render_template(
        'index.html',
        user_data=claims, error_message=error_message, times=times, firebaseConfig=firebaseConfig)

if __name__ == '__main__':

    # Flask's development server will automatically serve static files in
    # the "static" directory. See:
    # http://flask.pocoo.org/docs/1.0/quickstart/#static-files. Once deployed,
    # App Engine itself will serve those files as configured in app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
