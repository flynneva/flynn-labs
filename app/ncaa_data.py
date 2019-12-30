import datetime
from datetime import timedelta
import pytz
import urllib.request, json

utc = pytz.UTC

def parseTodaysGames(todaysGames):
  # get current time in Eastern Time Zone US
  now = datetime.datetime.now(utc) - timedelta(hours=5)
  # init list of games
  listOfGames = {}

  if (todaysGames['games'] == "No games today..."):
      listOfGames[0]=['NO', 'GAMES', 'TODAY']
  else:
    i = 0
    # iterate through json object and get relevant data
    for game in todaysGames['games']:
      awayTeam = game['game']['away']['names']['full'] + " ("
      awayTeam = awayTeam + game['game']['away']['names']['char6'] + ")"
      homeTeam = game['game']['home']['names']['full'] + " ("
      homeTeam = homeTeam + game['game']['home']['names']['char6'] + ")"
      gameState = game['game']['gameState']
      gameID = game['game']['url']

      gameID = gameID.split('/')
  
      # see if gameState is live
      if (gameState == 'pre'):
        startTime = game['game']['startTime']
      elif (gameState == 'live'):
        startTime = 'LIVE'
      elif (gameState == 'canceled'):
        startTime = 'CANCELED'
      elif (gameState == 'final'):
        startTime = 'GAME HAS ENDED'

      #TODO: grab the rankings for each team too
      listOfGames[i] = [homeTeam, awayTeam, startTime, gameID[2]]
      i = i + 1
 
  return listOfGames

# arg: sport to add to URL
def getTodaysGames(sport, division):
  # get current time in Eastern Time Zone US
  now = datetime.datetime.now(utc) - timedelta(hours=5)
  todaysURL = "https://data.ncaa.com/casablanca/scoreboard/"
  todaysURL = todaysURL + sport + "/" + division + "/"
  todaysURL = todaysURL + str(now.year) + "/" + str(now.month) + "/" + str(now.day) + "/scoreboard.json"
  try:
    tableOfGames = parseTodaysGames(json.loads(urllib.request.urlopen(todaysURL).read().decode()))
  
  except:
    tableOfGames = parseTodaysGames('{ "games": "No games today..." }')

  return tableOfGames

def parseBoxScore(boxScore):
  return boxScore

def getBoxScore(gameID):
  # build URL to NCAA data
  gameURL = "https://data.ncaa.com/casablanca/game/"
  gameURL = gameURL + gameID + "/boxscore.json"

  try:
    boxScore = parseBoxScore(json.loads(urllib.request.urlopen(gameURL).read().decode()))
  except:
    boxScore = parseBoxScore('{updatedTimestamp: "No data available"}')

  return boxScore
