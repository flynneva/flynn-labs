import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
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
        
        const bannerStyle = {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '75px',
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
          backgroundColor: this.props.homeColor,
          color: this.state.homeTextColor,
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
                    <Grid item xs={7} direction="column" style={homeDetailsStyle}>
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
                    <Grid item xs={7} direction="column" style={awayDetailsStyle}>
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

        let gameUrl;
        gameUrl = '/sports/ncaa/' + this.props.sport +  this.props.gameID;
        // wrap this component in a Grid component and add your spacing there
        return (
            <Grid container spacing={0} style={bannerStyle}>
              {homeTeam}
              {awayTeam}
            </Grid>
         );
    }
}

export default GameBanner;
