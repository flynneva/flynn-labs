import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class GameCard extends Component {
 
  render () {
    
    const cardStyle = {
      height: 85,
      width: 150,
    };
   
    const cardContentStyle = {
      height: 'auto',
      width: 'auto',
      margin: 1,
      padding: 0,
    };

    const gameStyle = {
      width: 'auto',
      height: 'auto',
      margin: 1,
      padding: 2,
    };

    const headerStyle = {
      height: 18,
      width: 'auto',
      fontSize: 12,
      textAlign: 'right',
      margin: 8,
      padding: 0,
    };

    const clockStyle = {
      height: 18,
      width: '',
      fontSize: 12,
      textAlign: 'left',
      margin: 0,
      padding: 0,
    };

    const periodStyle = {
      height: 18,
      width: 60,
      fontSize: 12,
      textAlign: 'right',
      margin: 0,
      padding: 0,
    };

    const homeStyle = {
      margin: 0,
      padding: 0,
    };

    const awayStyle = {
      margin: 0,
      padding: 0,
    };

    const nameStyle = {
      width: 110,
      height: 'auto',
      justifyContent: 'left',
      margin: 1,
    };

    const scoreStyle = {
      flexGrow: 1,
      margin: 0,
      justifyContent: 'right',
    };

    const homeNameStyle = {
      textAlign: 'left',
      margin: 0,
      padding: 1,
    };

    const homeRankStyle = {
      fontSize: 11,
      textAlign: 'right',
      marginTop: 5,
      marginRight: 4,
    };

    const homeScoreStyle = {
      margin: 0,
      padding: 0,
    };
    
    const awayNameStyle = {
      textAlign: 'left',
      margin: 0,
      padding: 1,
    };
    
    const awayRankStyle = {
      fontSize: 11,
      textAlign: 'right',
      marginTop: 5,
      marginRight: 4,
    };
    
    const awayScoreStyle = {
      margin: 0,
      padding: 0,
    };

    // determine what header should be
    let header;
    if (this.props.gameStatus === 'live') {
      header = (
        <Grid item xs style={headerStyle}>
          <Grid item xs container>
            <Grid item xs style={clockStyle}>
              {this.props.currentClock}
            </Grid>
            <Grid item xs style={periodStyle}>
              {this.props.currentPeriod}
            </Grid>
          </Grid>
          <Divider />
        </Grid>);
    } else {
      header = ( 
        <Grid item xs style={headerStyle}>
        { this.props.gameStatus === 'final' ? 'FINAL' :
	  this.props.gameStatus === 'postponed' ? 'POSTPONED' :
          this.props.gameStatus === 'canceled' ? 'CANCELED' :
          this.props.gameStatus }
        <Divider />
        </Grid>);
    }

    // deterime what the home team row should be
    let homeTeam;
    homeTeam = (
        <Grid item xs style={homeStyle} spacing={2}>
          <Grid item xs container>
            <Grid item xs style={homeRankStyle}>
              {this.props.homeRank}
            </Grid>
            <Grid item xs={6} style={homeNameStyle}>
              {this.props.homeName}
            </Grid>
            <Grid item xs={4} style={homeScoreStyle}>
              {this.props.homeScore}
            </Grid>
          </Grid>
        </Grid>);

    // deterime what the away team row should be
    let awayTeam;
    awayTeam = (
        <Grid item xs style={awayStyle} spacing={2}>
          <Grid item xs container>
            <Grid item xs style={awayRankStyle}>
              {this.props.awayRank}
            </Grid>
            <Grid item xs={6} style={awayNameStyle}>
              {this.props.awayName}
            </Grid>
            <Grid item xs={4} style={awayScoreStyle}>
              {this.props.awayScore}
            </Grid>
          </Grid>
        </Grid>);
    // wrap this component in a Grid component and add your spacing there
    return (
      <Card style={cardStyle} spacing={0}>
        <CardContent style={cardContentStyle}>
          <Grid container spacing={1}>
            {header}
          </Grid>
          <Grid container spacing={1}>
            {homeTeam}
          </Grid>
          <Grid container spacing={1}>
            {awayTeam}
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default GameCard;
