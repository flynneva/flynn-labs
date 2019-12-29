import datetime
from datetime import timedelta
import pytz
import urllib.request, json

utc = pytz.UTC
# get current time in Eastern Time Zone US
now = datetime.datetime.now(utc) - timedelta(hours=5)

def parseTodaysGames(todaysGames):
  # init list of games
  listOfGames = {}

  if (todaysGames['games'] == "No games today..."):
      listOfGames[0]=['NO', 'GAMES', 'TODAY']
  else:
    i = 0
    # iterate through json object and get relevant data
    for game in todaysGames['games']:
      awayTeam = game['game']['away']['names']['full']
      homeTeam = game['game']['home']['names']['full']
      gameState = game['game']['gameState']

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
      listOfGames[i] = [homeTeam, awayTeam, startTime]
      i = i + 1
  return listOfGames

# arg: sport to add to URL
def getTodaysGames(sport, division):
  todaysURL = "https://data.ncaa.com/casablanca/scoreboard/"
  todaysURL = todaysURL + sport + "/" + division + "/"
  todaysURL = todaysURL + str(now.year) + "/" + str(now.month) + "/" + str(now.day) + "/scoreboard.json"
  try:
    tableOfGames = parseTodaysGames(json.loads(urllib.request.urlopen(todaysURL).read().decode()))
  
  except:
    tableOfGames = parseTodaysGames('{ "games": "No games today..." }')

  return tableOfGames
