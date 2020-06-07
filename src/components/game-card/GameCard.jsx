import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

class GameCard extends Component {
    render () {
        const cardStyle = {
            margin: '8px',
            height: 100,
            width: 150
        };

        const headerGridStyle = {
            height: 26,
            width: '100%',
            backgroundColor: '#bfbfbf',
            margin: 0,
            padding: 0
        };
        
        const homeGridStyle = {
            height: 30,
            width: '100%',
            margin: 0,
            padding: 0,
            marginBottom: 4,
        };
        
        const awayGridStyle = {
            height: 30,
            width: '100%',
            margin: 0,
            padding: 0
        };
        
        const headerStyle = {
            height: 25,
            width: 'auto',
            fontSize: 12,
            textAlign: 'right',
            margin: 0,
            padding: 0
        };

        const headerFinalStyle = {
            height: 18,
            width: 'auto',
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'right',
            margin: 4,
            padding: 0,
            paddingRight: 8,
        };
        
        const dateStyle = {
            fontSize: 11,
            textAlign: 'right',
            margin: 0,
            padding: 0,
            paddingRight: 8,
            paddingTop: 6,
        };

        const timeStyle = {
            fontSize: 11,
            textAlign: 'left',
            margin: 0,
            padding: 0,
            paddingLeft: 8,
            paddingTop: 6,
        };

        const clockStyle = {
            height: 18,
            fontSize: 14,
            textAlign: 'left',
            margin: 0,
            padding: 0,
            marginLeft: 8,
            marginTop: 4,
            marginBottom: 4,
        };

        const periodStyle = {
            fontSize: 12,
            textAlign: 'right',
            margin: 0,
            padding: 0,
            paddingRight: 8,
            paddingTop: 5,
        };

        const homeNameStyle = {
            fontSize: 16,
            textAlign: 'left',
            lineHeight: 1,
            margin: 0,
            paddingTop: 4
        };

        const homeRecordStyle = {
            fontSize: 10,
            textAlign: 'left',
            marginLeft: 0,
            padding: 0,
            paddingBottom: 4
        };

        const homeRankStyle = {
            fontSize: 11,
            textAlign: 'right',
            marginTop: 5,
            paddingRight: 2,
            paddingLeft: 2,
        };

        const homeScoreStyle = {
            fontSize: 18,
            textAlign: 'center',
            margin: 0,
            padding: 0,
            paddingTop: 2,
        };

        const awayDetailsStyle = {
            textAlign: 'left',
            margin: 0,
            padding: 0
        };

        const awayNameStyle = {
            fontSize: 16,
            textAlign: 'left',
            lineHeight: 1,
            margin: 0,
            padding: 0,
            paddingTop: 4
        };

        const awayRecordStyle = {
            fontSize: 10,
            textAlign: 'left',
            marginLeft: 0,
            padding: 0
        };

        const awayRankStyle = {
            fontSize: 11,
            textAlign: 'right',
            marginTop: 5,
            paddingRight: 2,
            paddingLeft: 2,
        };

        const awayScoreStyle = {
            fontSize: 18,
            textAlign: 'center',
            margin: 0,
            padding: 0
        };

        // determine what header should be
        let header;
        if (this.props.gameStatus === 'live') {
            if (this.props.currentPeriod === 'HALF') {
                header = (
                    <Grid item xs style={headerStyle}>
                        <Grid item xs container>
                            <Grid item xs style={{ margin: 0, padding: 0 }}>
                              <Typography variant='body2' style={periodStyle}>
                                HALF TIME
                              </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                );
            } else {
                header = (
                    <Grid item xs style={headerStyle}>
                        <Grid item xs container style={headerStyle}>
                            <Grid item xs style={{ margin: 0, padding: 0 }}>
                              <Typography variant='body2' style={clockStyle}>
                                {this.props.currentClock}
                              </Typography>
                            </Grid>
                            <Grid item xs style={{ margin: 0, padding: 0}}>
                              <Typography variant='body2' style={periodStyle}>
                                {this.props.currentPeriod}
                              </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                );
            }
        } else if (this.props.gameStatus === 'pre') {
            header = (
                <Grid item xs style={headerStyle}>
                    <Grid item xs container style={headerStyle}>
                        <Grid item xs style={{ margin: 0, padding: 0 }}>
                          <Typography variant='body2' style={timeStyle}>
                            {this.props.startTime}
                          </Typography>
                        </Grid>
                        <Grid item xs style={{ margin: 0, padding: 0 }}>
                          <Typography variant='body2' style={dateStyle}>
                            {this.props.startDate}
                          </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            );
        } else {
            header = (
                <Grid item xs style={{ margin: 0, padding: 0 }}>
                  <Typography variant='body2' style={headerFinalStyle}>
                    {this.props.gameStatus === 'final' ?
                        'FINAL' :
                        this.props.gameStatus === 'postponed' ?
                            'POSTPONED' :
                            this.props.gameStatus === 'canceled' ?
                                'CANCELED' :
                                this.props.gameStatus}
                  </Typography>
                </Grid>
            );
        }

        // deterime what the home team row should be
        let homeTeam;
        homeTeam = (
            <Grid container spacing={0} style={{ margin: 0, padding: 0 }}>
              <Grid item xs={2}>
                <Typography variant='body2' style={homeRankStyle}>
                  {this.props.homeRank}
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Grid container spacing={0} direction="column" style={{ margin: 0, padding: 0 }}>
                  <Grid item xs>
                    <Typography variant='body2' style={homeNameStyle}>
                      {this.props.homeName}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant='body2' style={homeRecordStyle}>
                      {this.props.homeRecord}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}> 
                <Typography variant='body2' style={homeScoreStyle}>
                  {this.props.homeScore}
                </Typography>
              </Grid>
            </Grid>
        );

        // deterime what the away team row should be
        let awayTeam;
        awayTeam = (
            <Grid container spacing={0} style={{ margin: 0, padding: 0 }}>
              <Grid item xs={2}>
                <Typography variant='body2' style={awayRankStyle}>
                  {this.props.awayRank}
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Grid container direction="column" spacing={0}>
                    <Grid item xs>
                      <Typography variant='body2' style={awayNameStyle}>
                        {this.props.awayName}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography variant='body2' style={awayRecordStyle}>
                        {this.props.awayRecord}
                      </Typography>
                    </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='body2' style={awayScoreStyle}>
                  {this.props.awayScore}
                </Typography>
              </Grid>
            </Grid>
        );
        let gameUrl;
        gameUrl = '/sports/ncaa' + this.props.gameID;
        // wrap this component in a Grid component and add your spacing there
        return (
            <Grid item component={Link} to={gameUrl} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Paper elevation={2} style={cardStyle}>  
                <Grid container spacing={0}>
                  <Grid container spacing={0} style={headerGridStyle}>
                    {header}
                    <Divider />
                  </Grid>
                  <Grid container spacing={0} style={homeGridStyle}>
                      {homeTeam}
                  </Grid>
                  <Grid container spacing={0} style={awayGridStyle}>
                      {awayTeam}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
         );
    }
}

export default GameCard;
