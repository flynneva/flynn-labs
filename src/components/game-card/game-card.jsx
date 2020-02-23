import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class GameCard extends Component {
    render () {
        const cardStyle = {
            height: 100,
            width: 150
        };

        const cardContentStyle = {
            height: 'auto',
            width: 'auto',
            margin: 1,
            padding: 0
        };

        const headerStyle = {
            color: 'eeeeee',
            height: 18,
            width: 'auto',
            fontSize: 12,
            textAlign: 'right',
            margin: 8,
            padding: 0
        };

        const headerFinalStyle = {
            color: 'eeeeee',
            backgroundColor: 'ffffff',
            height: 18,
            width: 'auto',
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'right',
            margin: 8,
            padding: 0
        };
        
        const dateStyle = {
            fontSize: 11,
            margin: 0,
            padding: 0
        };

        const timeStyle = {
            fontSize: 11,
            margin: 0,
            padding: 0
        };

        const clockStyle = {
            height: 18,
            width: '',
            fontSize: 12,
            textAlign: 'left',
            margin: 0,
            padding: 0
        };

        const periodStyle = {
            height: 18,
            width: 60,
            fontSize: 12,
            textAlign: 'right',
            margin: 0,
            padding: 0
        };

        const homeStyle = {
            margin: 0,
            padding: 0
        };

        const awayStyle = {
            margin: 0,
            padding: 0
        };

        const homeDetailsStyle = {
            textAlign: 'left',
            margin: 0,
            padding: 0
        };

        const homeNameStyle = {
            fontSize: 16,
            textAlign: 'left',
            lineHeight: 1,
            margin: 0,
            paddingTop: 5
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
            marginRight: 4
        };

        const homeScoreStyle = {
            fontSize: 18,
            textAlign: 'center',
            margin: 0,
            padding: 0
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
            marginRight: 4
        };

        const awayScoreStyle = {
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
                            <Grid item xs style={periodStyle}>
                                HALF TIME
                            </Grid>
                        </Grid>
                        <Divider />
                    </Grid>
                );
            } else {
                header = (
                    <Grid item xs style={headerStyle} color="#eeeeee">
                        <Grid item xs container>
                            <Grid item xs style={clockStyle}>
                                {this.props.currentClock}
                            </Grid>
                            <Grid item xs style={periodStyle}>
                                {this.props.currentPeriod}
                            </Grid>
                        </Grid>
                        <Divider />
                    </Grid>
                );
            }
        } else if (this.props.gameStatus === 'pre') {
            header = (
                <Grid item xs style={headerStyle} color="#eeeeee">
                    <Grid item xs container>
                        <Grid item xs style={timeStyle}>
                            {this.props.startTime}
                        </Grid>
                        <Grid item xs style={dateStyle}>
                            {this.props.startDate}
                        </Grid>
                    </Grid>
                    <Divider />
                </Grid>
            );
        } else {
            header = (
                <Grid item xs style={headerFinalStyle}>
                    {this.props.gameStatus === 'final' ?
                        'FINAL' :
                        this.props.gameStatus === 'postponed' ?
                            'POSTPONED' :
                            this.props.gameStatus === 'canceled' ?
                                'CANCELED' :
                                this.props.gameStatus}
                    <Divider />
                </Grid>
            );
        }

        // deterime what the home team row should be
        let homeTeam;
        homeTeam = (
            <Grid item xs style={homeStyle}>
                <Grid item xs container>
                    <Grid item xs style={homeRankStyle}>
                        {this.props.homeRank}
                    </Grid>
                    <Grid
                        item
                        container
                        xs={6}
                        direction="column"
                        style={homeDetailsStyle}
                    >
                        <Grid item xs style={homeNameStyle}>
                            {this.props.homeName}
                        </Grid>
                        <Grid item xs style={homeRecordStyle}>
                            {this.props.homeRecord}
                        </Grid>
                    </Grid>
                    <Grid item xs={4} style={homeScoreStyle}>
                        {this.props.homeScore}
                    </Grid>
                </Grid>
            </Grid>
        );

        // deterime what the away team row should be
        let awayTeam;
        awayTeam = (
            <Grid item xs style={awayStyle}>
                <Grid item xs container>
                    <Grid item xs style={awayRankStyle}>
                        {this.props.awayRank}
                    </Grid>
                    <Grid
                        item
                        container
                        xs={6}
                        direction="column"
                        style={awayDetailsStyle}
                    >
                        <Grid item xs style={awayNameStyle}>
                            {this.props.awayName}
                        </Grid>
                        <Grid item xs style={awayRecordStyle}>
                            {this.props.awayRecord}
                        </Grid>
                    </Grid>
                    <Grid item xs={4} style={awayScoreStyle}>
                        {this.props.awayScore}
                    </Grid>
                </Grid>
            </Grid>
        );
        // wrap this component in a Grid component and add your spacing there
        return (
            <Card style={cardStyle}>
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
