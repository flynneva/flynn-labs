import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import tinycolor from 'tinycolor2';

class BoxScore extends Component {
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
        const { test } = this.state;

        const gridStyle = {
          margin: '8px',
          width: '95vw',
        };
     
        const boxScoreStyle = {
          maxWidth: '95vw',
        };

        const tableStyle = {
          margin: 0,
          padding: 0,
          minWidth: '95vw',
        };
        
        const tableTitle = {
          margin: 0,
          padding: 0,
        };
        
        const headerStyle = {
          margin: 0,
          padding: 0,
        };
        
        const homeTitleCellStyle = {
          color: this.state.homeTextColor,
          backgroundColor: this.props.homeInfo.color,
          fontSize: 16,
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
          paddingLeft: 16,
        };
        
        const awayTitleCellStyle = {
          color: this.state.awayTextColor,
          backgroundColor: this.props.awayInfo.color,
          fontSize: 16,
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
          paddingLeft: 16,
        };
        
        const headerCellStyle = {
          backgroundColor: '#eeeeee',
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
        };
        
        const nameHeaderStyle = {
          backgroundColor: '#eeeeee',
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
          paddingLeft: 8,
        };
        
        const dataCellStyle = {
          margin: 0,
          padding: 0,
        };

        let homeStats;
        if (this.props.homeInfo && this.props.homeBox) {
          // generate home team stats
          homeStats = (
                <Grid item style={boxScoreStyle}>
                  <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table" style={tableStyle}>
                      <TableHead>
                        <TableRow style={tableTitle}>
                          <TableCell style={homeTitleCellStyle} colSpan={13}>{this.props.homeInfo.shortName}</TableCell>
                        </TableRow>
                        <TableRow style={headerStyle}>
                          <TableCell style={nameHeaderStyle}>Player Name</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.homeBox.playerHeader.position}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.homeBox.playerHeader.points}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.homeBox.playerHeader.fieldGoalsMade}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.homeBox.playerHeader.threePointsMade}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.homeBox.playerHeader.freeThrowsMade}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.homeBox.playerHeader.totalRebounds}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.homeBox.playerHeader.offensiveRebounds}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.homeBox.playerHeader.assists}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.homeBox.playerHeader.personalFouls}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.homeBox.playerHeader.steals}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.homeBox.playerHeader.turnovers}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.homeBox.playerHeader.blockedShots}</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.props.homeBox.playerStats.map((player, index) => (
                          <TableRow hover key={index}>
                            <TableCell>{player.firstName} {player.lastName}</TableCell>
                            <TableCell style={dataCellStyle}>{player.position}</TableCell>
                            <TableCell style={dataCellStyle}>{player.points}</TableCell>
                            <TableCell style={dataCellStyle}>{player.fieldGoalsMade}</TableCell>
                            <TableCell style={dataCellStyle}>{player.threePointsMade}</TableCell>
                            <TableCell style={dataCellStyle}>{player.freeThrowsMade}</TableCell>
                            <TableCell style={dataCellStyle}>{player.totalRebounds}</TableCell>
                            <TableCell style={dataCellStyle}>{player.offensiveRebounds}</TableCell>
                            <TableCell style={dataCellStyle}>{player.assists}</TableCell>
                            <TableCell style={dataCellStyle}>{player.personalFouls}</TableCell>
                            <TableCell style={dataCellStyle}>{player.steals}</TableCell>
                            <TableCell style={dataCellStyle}>{player.turnovers}</TableCell>
                            <TableCell style={dataCellStyle}>{player.blockedShots}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
          );
        }

        let awayStats;
        if (this.props.awayInfo && this.props.awayBox) {
          // generate away team stats
          awayStats = (
                <Grid item style={boxScoreStyle}>
                  <TableContainer component={Paper}>
                    <Table size="small" aria-label="Away Boxscore" style={tableStyle}>
                      <TableHead>
                        <TableRow style={tableTitle}>
                          <TableCell style={awayTitleCellStyle} colSpan={13}>{this.props.awayInfo.shortName}</TableCell>
                        </TableRow>
                        <TableRow style={headerStyle}>
                          <TableCell style={nameHeaderStyle}>Player Name</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.awayBox.playerHeader.position}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.awayBox.playerHeader.points}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.awayBox.playerHeader.fieldGoalsMade}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.awayBox.playerHeader.threePointsMade}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.awayBox.playerHeader.freeThrowsMade}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.awayBox.playerHeader.totalRebounds}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.awayBox.playerHeader.offensiveRebounds}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.awayBox.playerHeader.assists}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.awayBox.playerHeader.personalFouls}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.awayBox.playerHeader.steals}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.awayBox.playerHeader.turnovers}</TableCell>
                          <TableCell style={headerCellStyle}>{this.props.awayBox.playerHeader.blockedShots}</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.props.awayBox.playerStats.map((player, index) => (
                          <TableRow hover key={index}>
                            <TableCell>{player.firstName} {player.lastName}</TableCell>
                            <TableCell style={dataCellStyle}>{player.position}</TableCell>
                            <TableCell style={dataCellStyle}>{player.points}</TableCell>
                            <TableCell style={dataCellStyle}>{player.fieldGoalsMade}</TableCell>
                            <TableCell style={dataCellStyle}>{player.threePointsMade}</TableCell>
                            <TableCell style={dataCellStyle}>{player.freeThrowsMade}</TableCell>
                            <TableCell style={dataCellStyle}>{player.totalRebounds}</TableCell>
                            <TableCell style={dataCellStyle}>{player.offensiveRebounds}</TableCell>
                            <TableCell style={dataCellStyle}>{player.assists}</TableCell>
                            <TableCell style={dataCellStyle}>{player.personalFouls}</TableCell>
                            <TableCell style={dataCellStyle}>{player.steals}</TableCell>
                            <TableCell style={dataCellStyle}>{player.turnovers}</TableCell>
                            <TableCell style={dataCellStyle}>{player.blockedShots}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
          );
        }
        return (
          <Grid container spacing={1} style={gridStyle}>
            {homeStats}
            {awayStats}
          </Grid>
        );
    }
}

export default BoxScore;
