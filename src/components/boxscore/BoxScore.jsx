import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class BoxScore extends Component {
    constructor (props) {
        super(props);
        this.state = {
          test: false,
        };
    }

    render () {
        const { test } = this.state;

        const cardStyle = {
            margin: '8px',
            height: 100,
            width: 150
        };

        return (
          <Card style={cardStyle}>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  {this.props.homeTeamName}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
    }
}

export default BoxScore;
