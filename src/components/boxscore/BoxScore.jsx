import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
          minWidth: '50px',
          textAlign: 'center',
          margin: 0,
          padding: 0,
          paddingLeft: 4,
          paddingRight: 4,
        };
        
        const nameHeaderStyle = {
          backgroundColor: '#eeeeee',
          fontWeight: 'bold',
          minWidth: '125px',
          textAlign: 'center',
          margin: 0,
          padding: 0,
        };
        
        const nameCellStyle = {
          margin: 0,
          padding: 0,
        };
        
        const dataCellStyle = {
          textAlign: 'right',
          margin: 0,
          padding: 0,
        };
        
        const totalTitleCellStyle = {
          backgroundColor: '#ffc738',
          fontSize: 16,
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
          paddingLeft: 16,
        };
        
        const totalNameStyle = {
          backgroundColor: '#bfbfbf',
          fontWeight: 'bold',
          minWidth: '125px',
          textAlign: 'center',
          margin: 0,
          padding: 0,
        };
        
        const totalHeaderStyle = {
          backgroundColor: '#bfbfbf',
          fontWeight: 'bold',
          minWidth: '50px',
          textAlign: 'center',
          margin: 0,
          padding: 0,
          paddingLeft: 4,
          paddingRight: 4,
        };

        const homeTeamCellStyle = {
          color: this.state.homeTextColor,
          backgroundColor: this.props.homeInfo.color,
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
        };

        const awayTeamCellStyle = {
          color: this.state.awayTextColor,
          backgroundColor: this.props.awayInfo.color,
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
        };
        
        let totalStats;
        if (this.props.homeInfo && this.props.homeBox) {
          totalStats = (
            <Grid item style={boxScoreStyle}>
              <TableContainer component={Paper}>
                <Table size="small" aria-label="Boxscore Totals Table" style={tableStyle}>
                  <TableHead>
                    <TableRow style={tableTitle}>
                      <TableCell style={totalTitleCellStyle} colSpan={20}>
                        <Typography variant='h4' style={totalTitleCellStyle}>
                          Team Totals
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow style={headerStyle}>
                      <TableCell style={totalNameStyle}>
                        <Typography variant='body2' style={totalNameStyle}>
                          Team
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          eFG%
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>  
                          TOV%
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          ORB%
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          DRB%
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          FTR
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          {this.props.homeBox.playerHeader.points}
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                         {this.props.homeBox.playerHeader.fieldGoalsMade}
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          FG %
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          {this.props.homeBox.playerHeader.threePointsMade}
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          3PT %
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          {this.props.homeBox.playerHeader.freeThrowsMade}
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          FT %
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          {this.props.homeBox.playerHeader.totalRebounds}
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          {this.props.homeBox.playerHeader.offensiveRebounds}
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          {this.props.homeBox.playerHeader.assists}
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          {this.props.homeBox.playerHeader.personalFouls}
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          {this.props.homeBox.playerHeader.steals}
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          {this.props.homeBox.playerHeader.turnovers}
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          {this.props.homeBox.playerHeader.blockedShots}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell style={awayeamCellStyle}>
                        <Typography variant='body2' style={awayTeamCellStyle}>
                          {this.props.awayInfo.shortName}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          0.0
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          0.0
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          0.0
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          0.0
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          0.0
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.points}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.fieldGoalsMade}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.fieldGoalPercentage}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.threePointsMade}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.threePointPercentage}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.freeThrowsMade}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.freeThrowPercentage}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.totalRebounds}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.offensiveRebounds}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.assists}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.personalFouls}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.steals}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.turnovers}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.blockedShots}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={homeTeamCellStyle}>
                        <Typography variant='body2' style={homeTeamCellStyle}>
                          {this.props.homeInfo.shortName}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          0.0
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          0.0
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          0.0
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          0.0
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          0.0
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.points}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.fieldGoalsMade}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.fieldGoalPercentage}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.threePointsMade}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.threePointPercentage}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.freeThrowsMade}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.freeThrowPercentage}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.totalRebounds}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.offensiveRebounds}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.assists}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.personalFouls}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.steals}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.turnovers}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.awayBox.playerTotals.blockedShots}
                        </Typography>
                      </TableCell>
                    
                    </TableRow>
                  </TableBody> 
                </Table>
              </TableContainer>
            </Grid>
         ); 
        }

        let homeStats;
        if (this.props.homeInfo && this.props.homeBox) {
          // generate home team stats
          homeStats = (
                <Grid item style={boxScoreStyle}>
                  <TableContainer component={Paper}>
                    <Table size="small" aria-label="Home Box Score" style={tableStyle}>
                      <TableHead>
                        <TableRow style={tableTitle}>
                          <TableCell style={homeTitleCellStyle} colSpan={13}>
                            <Typography variant='h6' style={homeTitleCellStyle}>
                              {this.props.homeInfo.shortName} {this.props.homeInfo.nickName}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow style={headerStyle}>
                          <TableCell style={{ margin: 0, padding: 0}}>
                            <Typography variant='body2' style={nameHeaderStyle}> 
                              Player Name
                            </Typography>
                          </TableCell>
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
                            <TableCell style={nameCellStyle}>{player.firstName} {player.lastName}</TableCell>
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
                          <TableCell style={awayTitleCellStyle} colSpan={13}>
                            <Typography variant='h6' style={awayTitleCellStyle}>
                              {this.props.awayInfo.shortName} {this.props.awayInfo.nickName}
                            </Typography>
                          </TableCell>
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
                            <TableCell style={nameCellStyle}>{player.firstName} {player.lastName}</TableCell>
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
            {totalStats}
            {homeStats}
            {awayStats}
          </Grid>
        );
    }
}

export default BoxScore;
