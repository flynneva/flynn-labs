import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import tinycolor from 'tinycolor2';

class GameBanner extends Component {
    constructor (props) {
        super(props);
        this.state = {
            homeTextColor: null,
            awayTextColor: null,
        };
    }
 
    componentDidMount () {
        if(tinycolor(this.props.homeColor).isLight()) {
          this.setState({ homeTextColor: '#000000' });
        } else {
          this.setState({ homeTextColor: '#ffffff' });
        }
   
        if(tinycolor(this.props.awayColor).isLight()) {
          this.setState({ awayTextColor: '#000000' });
        } else {
          this.setState({ awayTextColor: '#ffffff' });
        }
    }

    render () {

        if(!this.state.homeTextColor) {
          return null; 
        }

        const rootStyle = {
          margin: 0,
          padding: 0,
        }

        const homeGridStyle = {
          margin: 0,
          padding: 0,
        }
        
        const awayGridStyle = {
          margin: 0,
          padding: 0,
        }
        
        const pageStyle = {
          margin: 0,
          padding: 0,
          width: '100vw',
          height: '100px',
        }
        
        const bannerStyle = {
          margin: 0,
          padding: 0,
          width: '100vw',
          height: '75px',
        }
        
        const clockWrapper = {
          margin: 0,
          padding: 0,
        }
        
        const clockStyle = {
          margin: 0,
          padding: 0,
        }
        
        const venueStyle = {
          margin: 0,
          padding: 0,
          textAlign: 'center',
        }
         
        const homeStyle = {
          width: '50%',
          margin: 0,
          padding: 0,
          backgroundColor: this.props.homeColor,
          color: this.state.homeTextColor,
        }
       
        const homeDetailsStyle = {
            textAlign: 'left',
            margin: 0,
            padding: 0,
        };
  
        const homeNameStyle = {
            fontSize: 22,
            textAlign: 'left',
            margin: 0,
            padding: 0,
            paddingTop: 19,
        };

        const homeRankStyle = {
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'right',
            marginTop: 26,
            marginRight: 6,
        };

        const homeRecordStyle = {
            fontSize: 13,
            textAlign: 'left',
            marginLeft: 0,
            padding: 0,
        };

        const homeScoreStyle = {
            fontSize: 38,
            textAlign: 'center',
            margin: 0,
            padding: 0,
            paddingTop: 14,
            paddingRight: 2,
        };

        const awayStyle = {
          width: '50%',
          margin: 0,
          padding: 0,
          backgroundColor: this.props.awayColor,
          color: this.state.awayTextColor,
        }
       
        const awayDetailsStyle = {
            textAlign: 'right',
            margin: 0,
            padding: 0,
        };
  
        const awayNameStyle = {
            fontSize: 25,
            textAlign: 'right',
            margin: 0,
            padding: 0,
            paddingTop: 19,
        };

        const awayRankStyle = {
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'left',
            marginTop: 26,
            marginLeft: 6,
        };

        const awayRecordStyle = {
            fontSize: 13,
            textAlign: 'right',
            marginLeft: 0,
            padding: 0,
        };

        const awayScoreStyle = {
            fontSize: 38,
            textAlign: 'center',
            margin: 0,
            padding: 0,
            paddingTop: 14,
            paddingLeft: 2,
        };

        let homeTeam;
        homeTeam = (
            <Grid item xs style={homeStyle}>
                <Grid item xs container>
                    <Grid item xs style={{ margin: 0, padding: 0 }}>
                      <Typography variant='body2' style={homeRankStyle}>
                        {this.props.homeRank}
                      </Typography>
                    </Grid>
                    <Grid item xs={7} style={homeDetailsStyle}>
                        <Grid item xs style={{ margin: 0, padding: 0 }}>
                          <Typography variant='h4' style={homeNameStyle}>
                            {this.props.homeName}
                          </Typography>
                        </Grid>
                        <Grid item xs style={{ margin: 0, padding: 0 }}>
                          <Typography variant='body2' style={homeRecordStyle}>
                            {this.props.homeRecord}
                          </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} style={{ margin: 0, padding: 0 }}>
                      <Typography variant='h2' style={homeScoreStyle}>
                        {this.props.homeScore}
                      </Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
        
        let awayTeam;
        awayTeam = (
            <Grid item xs style={awayStyle}>
                <Grid item xs container>
                    <Grid item xs={3} style={{ margin: 0, padding: 0 }}>
                      <Typography variant='h2' style={awayScoreStyle}>
                        {this.props.awayScore}
                      </Typography>
                    </Grid>
                    <Grid item xs={7} style={awayDetailsStyle}>
                        <Grid item xs style={{ margin: 0, padding: 0 }}>
                          <Typography variant='h4' style={awayNameStyle}>
                            {this.props.awayName}
                          </Typography>
                        </Grid>
                        <Grid item xs style={{ margin: 0, padding: 0}}>
                          <Typography variant='body2' style={awayRecordStyle}>
                            {this.props.awayRecord}
                          </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs style={{ margin: 0, padding: 0 }}>
                      <Typography variant='body2' style={awayRankStyle}>
                        {this.props.awayRank}
                      </Typography>
                    </Grid>
                </Grid>
            </Grid>
        );

        let clockBanner;
        if (this.props.gameState === 'live' ) {
          if (this.props.gamePeriod === 'Half') {
            // it's halftime....
            clockBanner = (
              <Grid item xs style={{ justifyContent: 'center' }}>
                <Typography variant='body2' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  HALF TIME
                </Typography>
              </Grid>
            );
          } else {
            // game is live
            clockBanner = (
              <Grid container spacing={0} justify='center'>
                <Grid item xs>
                  <Typography variant='body2' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    {this.props.gameClock}
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant='body2' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    {this.props.gamePeriod}
                  </Typography>
                </Grid>
              </Grid>
            );
          }
        } else if (this.props.gameState === 'final') {
          // game is over
          clockBanner = (
              <Grid item xs style={{ fontWeight: 'bold' }}>
                  <Typography variant='body2' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    FINAL
                  </Typography>
              </Grid>
            );
        } else if (this.props.gameState === 'pre') {
          // game hasnt started
          clockBanner = (
              <Grid container spacing={0} justify='center'>
                <Grid item xs style={{ margin: 0, padding: 0, paddingLeft: 8 }}>
                  <Typography variant='body2' style={{ fontWeight: 'bold' }}>
                    {this.props.startTime}
                  </Typography>
                </Grid>
                <Grid item xs style={{ textAlign: 'right', margin: 0, padding: 0, paddingRight: 8 }}>
                  <Typography variant='body2' style={{ fontWeight: 'bold' }}>
                    {this.props.venueCity}, {this.props.venueState}
                  </Typography>
                </Grid>
              </Grid>
            );
        }

        let venueBanner;
        venueBanner = (
          <Grid container spacing={0} justify='center'>
            <Typography variant='body2' style={{ fontWeight: 'bold' }}>
              {this.props.venueName}
            </Typography>
          </Grid>
        );

        return (
          <Grid container spacing={0} style={pageStyle}>
            <Grid container spacing={0} style={bannerStyle}>
              {homeTeam}
              {awayTeam}
            </Grid>
            <Grid container spacing={0} direction='column' style={{ width: '100vw', height: '50px' }}>
              <Grid container justify='center' spacing={0}>
                <Grid item style={{ margin: 0, padding: 0, width: '75%', minWidth: '100px', backgroundColor: '#bfbfbf' }}>
                  {clockBanner}
                </Grid>
              </Grid>
              <Grid container justify='center' spacing={0}>
                <Grid item style={{ margin: 0, padding: 0, paddingLeft: 8, paddingRight: 8, minWidth: '75px', backgroundColor: '#bfbfbf' }}>
                  {venueBanner}
                </Grid>
              </Grid>  
            </Grid>
          </Grid>
         );
    }
}

export default GameBanner;
