#!/usr/bin/env python
# -*- coding: utf-8 -*-

import datetime
from datetime import timedelta
import json

from flask import render_template, jsonify

from app import app

from app import env
from app import ds_helper
from app import ncaa_data

@app.route('/')
def index():
    # Verify Firebase auth.
    id_token = env.request.cookies.get("token")
    error_message = None
    claims = None
    times = None

    if id_token:
        try:
            claims = env.google.oauth2.id_token.verify_firebase_token(
                id_token, env.firebase_request_adapter)

            ds_helper.store_time(claims['email'], datetime.datetime.now())
            times = ds_helper.fetch_times(claims['email'], 10)

        except ValueError as exc:
            error_message = str(exc)

    return render_template(
        "index.html",
        user_data=claims, error_message=error_message, times=times, firebaseConfig=env.firebaseConfig)


@app.route('/about')
def about():
    return render_template("about.html")


@app.route('/sports')
def sports():
    return render_template("sports.html")

@app.route('/finance')
def finance():
    return render_template("finance.html")


@app.route('/robotics')
def robotics():
    return render_template("robotics.html")

@app.route('/sports/professional')
def professional():
    return render_template("professional.html")

@app.route('/sports/college')
def college():
    return render_template("college.html")

@app.route('/sports/college/basketball-men')
def college_basketball_men():
  listOfGames = ncaa_data.getTodaysGames("basketball-men", "d1")
  
  return render_template(
    "college_basketball_men.html", listOfGames=listOfGames)

@app.route('/sports/college/basketball-men/<gameID>')
def college_basketball_men_game(gameID):
  return render_template("college_basketball_men_game.html", page=page)
 
@app.errorhandler(404)
def not_found_error(error):
  return render_template('404.html'), 404
