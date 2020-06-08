import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import BoxScore from '../boxscore/BoxScore';
import GameBanner from '../game-banner/GameBanner';
import { useNCAA } from 'react-ncaa-data';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function GamePage (props) {
  const { sport, getGameInfo, gameInfo, getBoxScore, boxscore, getPbP } = useNCAA();

  let prevGameInfo;
  if (!gameInfo.inputMD5Sum) {
    prevGameInfo = usePrevious(gameInfo);
  } else {
    prevGameInfo = usePrevious(gameInfo.inputMD5Sum);
  }

  let prevBoxScore;
  if (!boxscore.inputMD5Sum) {
    prevBoxScore = usePrevious(boxscore);
  } else {
    prevBoxScore = usePrevious(boxscore.inputMD5Sum);
  }

  useEffect(() => {
    if (gameInfo.inputMD5Sum === undefined || prevGameInfo !== gameInfo.inputMD5Sum) {
      getGameInfo(props.match.params.id);
    }
    
    if (boxscore === undefined || prevBoxScore !== boxscore.inputMD5Sum) {
      getBoxScore(props.match.params.id);
    }
  })

  let banner;
  if (gameInfo !== undefined  && gameInfo.length !== 0) {
    banner = <GameBanner homeName={gameInfo.home.names['6Char']}
                         homeRecord={gameInfo.home.record}
                         homeColor={gameInfo.home.color}
                         homeRank={gameInfo.home.rank}
                         homeScore={gameInfo.home.score}
                         awayName={gameInfo.away.names['6Char']}
                         awayRecord={gameInfo.away.record}
                         awayColor={gameInfo.away.color}
                         awayRank={gameInfo.away.rank}
                         awayScore={gameInfo.away.score}
                         gameState={gameInfo.status.gameState}
                         gameClock={gameInfo.status.clock}
                         gamePeriod={gameInfo.status.currentPeriod}
                         startTime={gameInfo.status.startTime}
                         winner={gameInfo.status.winner}
                         network={gameInfo.status.network}
                         venueCity={gameInfo.venue.city}
                         venueName={gameInfo.venue.name}
                         venueState={gameInfo.venue.state} />
  }

  let boxscoreViz;
  let homeMetaData;
  let awayMetaData;
  let homeBoxScore;
  let awayBoxScore;
  if(boxscore !== undefined && boxscore.length !== 0) {
    if (boxscore.meta.teams['0'].homeTeam) {
      // home team is team 0
      homeMetaData = boxscore.meta.teams['0'];
      awayMetaData = boxscore.meta.teams['1'];
    } else {
      homeMetaData = boxscore.meta.teams['1'];
      awayMetaData = boxscore.meta.teams['0'];
    }

    if (homeMetaData.id === boxscore.teams['0'].teamId) {
      // home team is first in list 
      homeBoxScore = boxscore.teams['0'];
      awayBoxScore = boxscore.teams['1'];
    } else {
      homeBoxScore = boxscore.teams['1'];
      awayBoxScore = boxscore.teams['0'];
    } 

    boxscoreViz = (
        <BoxScore gameID={props.match.params.id}
                  homeInfo={homeMetaData}
                  awayInfo={awayMetaData}
                  homeBox={homeBoxScore}
                  awayBox={awayBoxScore} />
    );
  }

  return (
    <Grid container>
      <Grid item>
        {banner}
      </Grid>
      <Grid item style={{ paddingTop: '16px'}}>
        {boxscoreViz}
      </Grid>
    </Grid>
  );
}

export default withRouter(GamePage);
