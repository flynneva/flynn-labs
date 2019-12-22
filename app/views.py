#!/usr/bin/env python
# -*- coding: utf-8 -*-

import datetime

from flask import render_template

from app import app

from app import env
from app import ds_helper

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
