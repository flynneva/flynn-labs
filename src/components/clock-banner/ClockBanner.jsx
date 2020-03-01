import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

class ClockBanner extends Component {
    constructor (props) {
        super(props);
        this.state = {
          test: null,
        };
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
        
        // wrap this component in a Grid component and add your spacing there
        return (
            <Grid container spacing={0} style={bannerStyle}>
              <Grid item>
                CLOCK
              </Grid>
            </Grid>
         );
    }
}

export default ClockBanner;
