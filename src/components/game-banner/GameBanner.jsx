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
        
        const awayStyle = {
          width: '50%',
          margin: 0,
          padding: 0,
          backgroundColor: this.props.awayColor,
          color: this.state.awayTextColor,
        }

        let gameUrl;
        gameUrl = '/sports/ncaa/' + this.props.sport +  this.props.gameID;
        // wrap this component in a Grid component and add your spacing there
        return (
            <Grid container spacing={0} style={bannerStyle}>
              <Grid item style={homeStyle}>
                <Grid item>
                  {this.props.homeRank}
                </Grid>
                <Grid item>
                  {this.props.homeName}
                </Grid>
                <Grid item>
                  {this.props.homeScore}
                </Grid>
                <Grid item>
                  {this.props.homeRecord}
                </Grid>
              </Grid>
              <Grid item style={awayStyle}>
                <Grid container spacing={0}>
                  <Grid item>
                    {this.props.awayName}
                  </Grid>
                  <Grid item>
                    {this.props.awayRank}
                  </Grid>
                  <Grid item>
                    {this.props.awayScore}
                  </Grid>
                  <Grid item>
                    {this.props.awayRecord}
                  </Grid>
                </Grid> 
              </Grid>
            </Grid>
         );
    }
}

export default GameBanner;
