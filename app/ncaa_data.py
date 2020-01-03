import datetime
from datetime import timedelta
import pytz
import urllib.request, json

utc = pytz.UTC

# arg: sport to add to URL
def getTodaysGames(sport, division):
  # get current time in Eastern Time Zone US
  now = datetime.datetime.now(utc) - timedelta(hours=5)
  todaysURL = "https://data.ncaa.com/casablanca/scoreboard/"
  todaysURL = todaysURL + sport + "/" + division + "/"

  if (sport == 'football'):
    if (now.month == 12): 
      todaysURL = todaysURL + str(now.year) + "/P/scoreboard.json"
    elif (now.month == 1):
      todaysURL = todaysURL + str(now.year - 1) + "/P/scoreboard.json"
    else: 
      todaysURL = todaysURL + str(now.year) + "/" + str('{:02d}'.format(now.month)) + "/" + str('{:02d}'.format(now.day)) + "/scoreboard.json"   
  elif (sport == 'basketball-men'):
    if (now.month == 3 or now.month == 4):
      todaysURL = todaysURL + str(now.year) + "/P/scoreboard.json"
    else:
      todaysURL = todaysURL + str(now.year) + "/" + str('{:02d}'.format(now.month)) + "/" + str('{:02d}'.format(now.day)) + "/scoreboard.json"   

  print(todaysURL)
  try:
    tableOfGames = json.loads(urllib.request.urlopen(todaysURL).read().decode())    
  except:
    tableOfGames = '{ "games": "none"  }'
  
  return tableOfGames

def getBoxScore(gameID):
  # build URL to NCAA data
  gameURL = "https://data.ncaa.com/casablanca/game/"
  gameURL = gameURL + gameID + "/boxscore.json"

  try:
    boxScore = json.loads(urllib.request.urlopen(gameURL).read().decode())
  except:
    boxScore = '{updatedTimestamp: "No data available"}'

  return boxScore

def getScoreboard(gameID):
  # build URL to NCAA data
  gameURL = "https://data.ncaa.com/casablanca/game/"
  gameURL = gameURL + gameID + "/scoreboard.json"

  try:
    scoreboard = json.loads(urllib.request.urlopen(gameURL).read().decode())
  except:
    scoreboard = '{updatedTimestamp: "No data available"}'

  return scoreboard

def getPBP(gameID):
  # build URL to NCAA data
  gameURL = "https://data.ncaa.com/casablanca/game/"
  gameURL = gameURL + gameID + "/pbp.json"

  try:
    pbp = json.loads(urllib.request.urlopen(gameURL).read().decode())
  except:
    pbp = '{updatedTimestamp: "No data available"}'

  return pbp
