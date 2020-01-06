#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, render_template, request
from google.auth.transport import requests
from google.cloud import datastore
import google.oauth2.id_token

debug = False

firebase_request_adapter = requests.Request()

datastore_client = datastore.Client()

app = Flask(__name__)

# sports levels
levels = {}
levels['ncaa'] = 'NCAA'
levels['professional'] = 'Professional'

# sports
sports = {}

ncaaSports = {}
professionalSports = {}

ncaaSports['basketball-men'] = 'Men\'s Basketball'
ncaaSports['football'] = 'Football'

professionalSports['nfl'] = 'NFL'
professionalSports['nba'] = 'NBA'
professionalSports['mlb'] = 'MLB'
professionalSports['nhl'] = 'NHL'

sports['ncaa'] = ncaaSports
sports['professional'] = professionalSports

# divisions
divisions = {}

basketballMensDiv = {}
footballDiv = {}
basketballMensDiv[0] = 'd1'
footballDiv[0] = 'fbs'

ncaaDivisions = {}
ncaaDivisions['basketball-men'] = basketballMensDiv
ncaaDivisions['football'] = footballDiv

professionalDivisions = {}
professionalDivisions['nfl'] = 'NFL'
professionalDivisions['nba'] = 'NBA'
professionalDivisions['mlb'] = 'MLB'
professionalDivisions['nhl'] = 'NHL'

divisions['ncaa'] = ncaaDivisions
divisions['professional'] = professionalDivisions

# finance topics
financeTopics = {}
financeTopics['stocks'] = 'Stocks'
financeTopics['personal_finance'] = 'Personal Finance'
financeTopics['compound_interest'] = 'Compound Interest'

firebase_entity = {}
firebaseConfig = {}

if(debug == False):
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
else:
  print("debug mode set to true, running on local env vars")
  import os
  firebaseConfig["apiKey"] = os.environ['FIREBASE_API_KEY']
  firebaseConfig["authDomain"] = os.environ['FIREBASE_AUTH_DOMAIN']
  firebaseConfig["databaseURL"] = os.environ['FIREBASE_DATABASE_URL']
  firebaseConfig["projectId"] = os.environ['FIREBASE_PROJECT_ID']
  firebaseConfig["storageBucket"] = os.environ['FIREBASE_STORAGE_BUCKET']
  firebaseConfig["messagingSenderId"] = os.environ['FIREBASE_MESSAGING_SENDER_ID']
  firebaseConfig["appId"] = os.environ['FIREBASE_APP_ID']
  firebaseConfig["measurementId"] = os.environ['FIREBASE_MEASUREMENT_ID']
