#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Flask

app = Flask(__name__, instance_relative_config=True)

# load in app views
from app import views

# load the config file
app.config.from_object('config')

from app import assets
