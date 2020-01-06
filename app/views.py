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
def home():
  return render_template("home.html")

@app.route('/<topic>')
def topic(topic):
  html_file = topic + '.html'
 
  if (topic == 'sports'):
    return render_template(html_file, levels=env.levels)
  else:
    return render_template(html_file)

@app.route('/sports/<level>')
def levelOfSport(level):
  return render_template("level.html", levels=env.levels, level=level, sports=env.sports, divisions=env.divisions)

@app.route('/sports/<level>/<sport>/<division>')
def sport(level, sport, division):
  if (level == 'ncaa'):
    scoreboard = ncaa_data.getTodaysGames(sport, division)
  elif (level == 'professional'):
    scoreboard = '{ "games": "None" }'
  else:
    scoreboard = '{ "No data for that level of sport" }'

  return render_template(
    "sport.html", levels=env.levels, sports=env.sports,
                  level=level, sport=sport, division=division, 
                  divisions=env.divisions, scoreboard=scoreboard)

@app.route('/sports/<level>/<sport>/<division>/<game>/<gameID>')
def live_game(level, sport, division, game, gameID):
  if (level == 'ncaa'):
    scoreboard = ncaa_data.getScoreboard(gameID)
    boxScore = ncaa_data.getBoxScore(gameID)
    pbp = ncaa_data.getPBP(gameID)
  elif (level == 'professional'):
    scoreboard = ''
    boxScore = ''
    pbp = ''
  else:
    scoreboard = ''
    boxScore = ''
    pbp = ''

  if (sport == 'basketball-men'):
    return render_template("basketball_game.html", level=level, levels=env.levels,
                         sports=env.sports, sport=sport, divisions=env.divisions,
                         division=division, game=game, gameID=gameID,
                         scoreboard=scoreboard, boxScore=boxScore, pbp=pbp)
  elif (sport == 'football'):
    return render_template("football_game.html", level=level, sport=sport, divsions=env.divisions,
                         division=division, game=game, gameID=gameID, 
                         scoreboard=scoreboard, boxScore=boxScore, pbp=pbp)
  else:
    return render_template('404.html'), 404

@app.route('/index')
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

@app.errorhandler(404)
def not_found_error(error):
  return render_template('404.html'), 404
