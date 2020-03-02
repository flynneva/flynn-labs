import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
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
          width: '100vw',
          height: '25px',
        }
        
        const clockStyle = {
          backgroundColor: '#ffffff',
          margin: 0,
          padding: 0,
          width: '25%',
          height: '25px',
          textAlign: 'center',
          paddingTop: 4,
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
            fontSize: 18,
            textAlign: 'left',
            lineHeight: 1,
            margin: 0,
            paddingTop: 21,
        };

        const homeRankStyle = {
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'right',
            marginTop: 22,
            marginRight: 5,
        };

        const homeRecordStyle = {
            fontSize: 11,
            textAlign: 'left',
            marginLeft: 0,
            padding: 0,
            paddingBottom: 0,
            paddingTop: 2,
        };

        const homeScoreStyle = {
            fontSize: 27,
            textAlign: 'center',
            margin: 0,
            padding: 0,
            paddingTop: 18,
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
            fontSize: 18,
            textAlign: 'right',
            lineHeight: 1,
            margin: 0,
            paddingTop: 21,
        };

        const awayRankStyle = {
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'left',
            marginTop: 22,
            marginLeft: 5,
        };

        const awayRecordStyle = {
            fontSize: 11,
            textAlign: 'right',
            marginLeft: 0,
            padding: 0,
            paddingBottom: 0,
            paddingTop: 2,
        };

        const awayScoreStyle = {
            fontSize: 27,
            textAlign: 'center',
            margin: 0,
            padding: 0,
            paddingTop: 18,
            paddingLeft: 2,
        };

        let homeTeam;
        homeTeam = (
            <Grid item xs style={homeStyle}>
                <Grid item xs container>
                    <Grid item xs style={homeRankStyle}>
                        {this.props.homeRank}
                    </Grid>
                    <Grid item xs={7} style={homeDetailsStyle}>
                        <Grid item xs style={homeNameStyle}>
                            {this.props.homeName}
                        </Grid>
                        <Grid item xs style={homeRecordStyle}>
                            {this.props.homeRecord}
                        </Grid>
                    </Grid>
                    <Grid item xs={3} style={homeScoreStyle}>
                        {this.props.homeScore}
                    </Grid>
                </Grid>
            </Grid>
        );
        
        let awayTeam;
        awayTeam = (
            <Grid item xs style={awayStyle}>
                <Grid item xs container>
                    <Grid item xs={3} style={awayScoreStyle}>
                        {this.props.awayScore}
                    </Grid>
                    <Grid item xs={7} style={awayDetailsStyle}>
                        <Grid item xs style={awayNameStyle}>
                            {this.props.awayName}
                        </Grid>
                        <Grid item xs style={awayRecordStyle}>
                            {this.props.awayRecord}
                        </Grid>
                    </Grid>
                    <Grid item xs style={awayRankStyle}>
                        {this.props.awayRank}
                    </Grid>
                </Grid>
            </Grid>
        );

        let clockBanner;
        if (this.props.gameState === 'live' ) {
          if (this.props.gamePeriod === 'Half') {
            // it's halftime....
            clockBanner = (
              <Grid item xs justify='center' style={{ fontWeight: 'bold' }}>
                HALF TIME
              </Grid>
            );
          } else {
            // game is live
            clockBanner = (
              <Grid container spacing={0} justify='center'>
                <Grid item xs>
                 {this.props.gameClock}
                </Grid>
                <Grid item xs>
                 {this.props.gamePeriod}
                </Grid>
              </Grid>
            );
          }
        } else if (this.props.gameState === 'final') {
          // game is over
          clockBanner = (
              <Grid item xs justify='center' style={{ fontWeight: 'bold' }}>
                FINAL
              </Grid>
            );
        } else if (this.props.gameState === 'pre') {
          // game hasnt started
          clockBanner = (
              <Grid container spacing={0} justify='center'>
                <Grid item xs>
                 {this.props.startTime}
                </Grid>
                <Grid item xs>
                 {this.props.venueCity}, {this.props.venueState}
                </Grid>
              </Grid>
            );
        }

        return (
          <Grid container spacing={0} style={pageStyle}>
            <Grid container spacing={0} style={bannerStyle}>
              {homeTeam}
              {awayTeam}
            </Grid>
            <Grid container spacing={0} justify='center' style={clockWrapper}>
              <Paper elevation={2} style={clockStyle}>
                {clockBanner}
              </Paper>
            </Grid>
          </Grid>
         );
    }
}

export default GameBanner;
