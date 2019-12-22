from flask import Flask, render_template, request
from google.auth.transport import requests
from google.cloud import datastore
import google.oauth2.id_token

firebase_request_adapter = requests.Request()

datastore_client = datastore.Client()

app = Flask(__name__)

firebase_entity = {}
firebaseConfig = {}

# get env vars for firebase login
firebase_entity = datastore_client.get(datastore_client.key('env_var', 'firebaseConfig'))

firebaseConfig["apiKey"] = firebase_entity['FIREBASE_API_KEY']
firebaseConfig["authDomain"] = firebase_entity['FIREBASE_AUTH_DOMAIN']
firebaseConfig["databaseURL"] = firebase_entity['FIREBASE_DATABASE_URL']
firebaseConfig["projectId"] = firebase_entity['FIREBASE_PROJECT_ID']
firebaseConfig["storageBucket"] = firebase_entity['FIREBASE_STORAGE_BUCKET']
firebaseConfig["messagingSenderId"] = firebase_entity['FIREBASE_MESSAGING_SENDER_ID']
firebaseConfig["appId"] = firebase_entity['FIREBASE_APP_ID']
firebaseConfig["measurementId"] = firebase_entity['FIREBASE_MEASUREMENT_ID']
