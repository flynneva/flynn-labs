import datetime
import urllib.request, json

# arg: sport to add to URL
def getTodaysGames(sport, division):
  now = datetime.datetime.now()
  todaysURL = "https://data.ncaa.com/casablanca/scoreboard/"
  todaysURL = todaysURL + sport + "/" + division + "/"
  todaysURL = todaysURL + str(now.year) + "/" + str(now.month) + "/" + str(now.day) + "/scoreboard.json"
  try:
    return json.loads(urllib.request.urlopen(todaysURL).read().decode())
  except:
    errorStr = '{ "games": "No games today..." }'
    return json.loads(errorStr)
