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
import { Chart } from 'react-google-charts';

const baseURL = '/ncaa_api/casablanca/game/';

class BoxScore extends Component {
    constructor (props) {
        super(props);
        this.state = {
          isMounted: null,
          lastUpdated: '',
          homeTextColor: null,
          awayTextColor: null,
          gameUrl: '',
          gameID: '',
          gameInfo: {},
          boxscore: {},
          pbp: {},
          preview: {},
          recap: {},
          scoring_summary: {},
          team_stats: {},
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
       
        var game_url = baseURL + this.props.gameID + '/';
        this.setState({ gameUrl: game_url});
        this.setState({ gameID: this.props.gameID });
        this.setState({ lastUpdated: 'NOW' });
        this.setState({ isMounted: true });
    }

    componentDidUpdate (prevProps, prevState) {
      var gameInfo_url = this.state.gameUrl + 'gameInfo.json';
      if(this.state.isMounted) {
        if (prevState.lastUpdated !== this.state.lastUpdated) {
          fetch(gameInfo_url, {
                   method: 'GET',
                   body: JSON.stringify()
          })
          .then(response => response.json())
          .then(data => {
            this.setState({ gameInfo: data });
            this.setState({ lastUpdated: data.status.updatedTimestamp });
          })
          .catch(error => {
            console.log(error);
          })
        } else {
          // do nothing
        }
      }
    }

    render () {
        const gridStyle = {
          margin: 0,
          padding: 0,
          width: '100vw',
          justifyContent: 'center',
        };
     
        const boxScoreStyle = {
          maxWidth: '95vw',
        };

        const tableStyle = {
          margin: 0,
          padding: 0,
          minWidth: '50vw',
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
          textAlign: 'center',
          margin: 0,
          padding: 0,
          paddingLeft: 4,
          paddingRight: 4,
          whiteSpace: 'nowrap',
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
          paddingLeft: 4,
        };
        
        const dataCellStyle = {
          textAlign: 'right',
          margin: 0,
          padding: 0,
          paddingRight: 4,
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
          minWidth: '85px',
          textAlign: 'center',
          margin: 0,
          padding: 0,
        };
        
        const totalHeaderStyle = {
          backgroundColor: '#bfbfbf',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: 0,
          padding: 0,
          paddingLeft: 4,
          paddingRight: 4,
          whiteSpace: 'nowrap',
        };

        const homeTeamCellStyle = {
          color: this.state.homeTextColor,
          backgroundColor: this.props.homeInfo.color,
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
          paddingLeft: 4,
        };

        const awayTeamCellStyle = {
          color: this.state.awayTextColor,
          backgroundColor: this.props.awayInfo.color,
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
          paddingLeft: 4,
        };

        let home_eFG;
        if (this.props.homeBox.playerTotals.fieldGoalsMade) {
          var FGM = parseInt((this.props.homeBox.playerTotals.fieldGoalsMade).split('-')[0]);
          var FGA = parseInt((this.props.homeBox.playerTotals.fieldGoalsMade).split('-')[1]);
          var TPM = parseInt((this.props.homeBox.playerTotals.threePointsMade).split('-')[0]);
          var TPA = parseInt((this.props.homeBox.playerTotals.threePointsMade).split('-')[1]);

          if (FGA > 0) {         
            home_eFG = parseFloat(parseFloat(FGM + parseFloat(0.5 * TPM))/FGA * 100).toFixed(1) + '%';
          }
        }
 
        let away_eFG;
        if (this.props.awayBox.playerTotals.fieldGoalsMade) {
          var FGM = parseInt((this.props.awayBox.playerTotals.fieldGoalsMade).split('-')[0]);
          var FGA = parseInt((this.props.awayBox.playerTotals.fieldGoalsMade).split('-')[1]);
          var TPM = parseInt((this.props.awayBox.playerTotals.threePointsMade).split('-')[0]);
          var TPA = parseInt((this.props.awayBox.playerTotals.threePointsMade).split('-')[1]);
         
          if (FGA > 0) {         
            away_eFG = parseFloat(parseFloat(FGM + parseFloat(0.5 * TPM))/FGA * 100).toFixed(2) + '%';
          }
        }
       
        let totalPos;
        if (this.props.homeBox.playerTotals.fieldGoalsMade) {
          var hFGA = parseInt((this.props.homeBox.playerTotals.fieldGoalsMade).split('-')[1]);
          var aFGA = parseInt((this.props.awayBox.playerTotals.fieldGoalsMade).split('-')[1]);
          var hFTA = parseInt((this.props.homeBox.playerTotals.freeThrowsMade).split('-')[1]);
          var aFTA = parseInt((this.props.awayBox.playerTotals.freeThrowsMade).split('-')[1]);
          var hOReb = parseInt((this.props.homeBox.playerTotals.offensiveRebounds));
          var aOReb = parseInt((this.props.awayBox.playerTotals.offensiveRebounds));
          var hTO = parseInt((this.props.homeBox.playerTotals.turnovers));
          var aTO = parseInt((this.props.awayBox.playerTotals.turnovers));

          var homePos = parseFloat(hFGA - hOReb + parseFloat(0.475 * hFTA) + hTO);
          var awayPos = parseFloat(aFGA - aOReb + parseFloat(0.475 * aFTA) + aTO);

          totalPos = parseFloat((homePos + awayPos) / 2);
        }
        
        let home_TO;
        if (this.props.homeBox.playerTotals.turnovers) {
          var hTO = parseInt((this.props.homeBox.playerTotals.turnovers));

          if (totalPos > 0) {
            home_TO = parseFloat(hTO / totalPos * 100).toFixed(2) + '%';
          }
        }
        
        let away_TO;
        if (this.props.awayBox.playerTotals.turnovers) {
          var aTO = parseInt((this.props.awayBox.playerTotals.turnovers));

          if (totalPos > 0) {
            away_TO = parseFloat(aTO / totalPos * 100).toFixed(2) + '%';
          }
        }
        
        let home_OR;
        if (this.props.homeBox.playerTotals.offensiveRebounds) {
          var hOR = parseInt((this.props.homeBox.playerTotals.offensiveRebounds));
          var aOR = parseInt((this.props.awayBox.playerTotals.offensiveRebounds));
          var aTR = parseInt((this.props.awayBox.playerTotals.totalRebounds));
          var aDR = parseInt(aTR - aOR);

          if( parseInt(hOR + aDR) > 0) {
            home_OR = parseFloat(hOR / parseInt(hOR + aDR) * 100).toFixed(2) + '%';
          }
        }

        let away_OR;
        if (this.props.awayBox.playerTotals.offensiveRebounds) {
          var aOR = parseInt((this.props.awayBox.playerTotals.offensiveRebounds));
          var hOR = parseInt((this.props.homeBox.playerTotals.offensiveRebounds));
          var hTR = parseInt((this.props.homeBox.playerTotals.totalRebounds));
          var hDR = parseInt(hTR - hOR);

          if( parseInt(aOR + hDR) > 0) {
            away_OR = parseFloat(aOR / parseInt(aOR + hDR) * 100).toFixed(2) + '%';
          }
        }
        
        let home_FT;
        if (this.props.homeBox.playerTotals.freeThrowsMade) {
          var hFTA = parseInt((this.props.homeBox.playerTotals.freeThrowsMade).split('-')[1]);
          var hFGA = parseInt((this.props.homeBox.playerTotals.fieldGoalsMade).split('-')[1]);
 
          if (hFGA > 0) {
            home_FT = parseFloat(parseFloat(hFTA/hFGA) * 100).toFixed(2) + '%';
          }
        }
        
        let away_FT;
        if (this.props.awayBox.playerTotals.freeThrowsMade) {
          var aFTA = parseInt((this.props.awayBox.playerTotals.freeThrowsMade).split('-')[1]);
          var aFGA = parseInt((this.props.awayBox.playerTotals.fieldGoalsMade).split('-')[1]);

          if (aFGA > 0) {
            away_FT = parseFloat(parseFloat(aFTA/aFGA) * 100).toFixed(2) + '%';
          }
        }
        
        let home_PPP;
        if (this.props.homeBox.playerTotals.points) {
          var hPTS = parseInt((this.props.homeBox.playerTotals.points));

          if (totalPos > 0) {
            home_PPP = parseFloat(hPTS / totalPos).toFixed(2);
          }
        }
        
        let away_PPP;
        if (this.props.awayBox.playerTotals.points) {
          var aPTS = parseInt((this.props.awayBox.playerTotals.points));

          if (totalPos > 0) {
            away_PPP = parseFloat(aPTS / totalPos).toFixed(2);
          }
        }
        
        let tempoFree;
        if (this.props.homeInfo && this.props.homeBox  && totalPos) {
          tempoFree = (
            <Grid item style={boxScoreStyle}>
              <TableContainer component={Paper}>
                <Table size="small" aria-label="Tempo-Free Stats Table" style={tableStyle}>
                  <TableHead>
                    <TableRow style={tableTitle}>
                      <TableCell style={totalTitleCellStyle} colSpan={20}>
                        <Typography variant='h4' style={totalTitleCellStyle}>
                          Tempo Free
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow style={tableTitle}>
                      <TableCell style={{ backgroundColor: '#bfbfbf', padding: 0, margin: 0 }} colSpan={20}>
                        <Typography variant='body2' style={{ margin: 0, padding: 0, paddingRight: 8,  textAlign: 'right', backgroundColor: '#bfbfbf'}}>
                          Total Average Possessions: {totalPos.toFixed(0)}
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
                          TO%
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          OR%
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          FTR%
                        </Typography>
                      </TableCell>
                      <TableCell style={totalHeaderStyle}>
                        <Typography variant='body2' style={totalHeaderStyle}>
                          PPP
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell style={homeTeamCellStyle}>
                        <Typography variant='body2' style={homeTeamCellStyle}>
                          {this.props.homeInfo.shortName}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {home_eFG}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {home_TO}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {home_OR}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {home_FT}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {home_PPP}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell style={awayTeamCellStyle}>
                        <Typography variant='body2' style={awayTeamCellStyle}>
                          {this.props.awayInfo.shortName}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {away_eFG}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {away_TO}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {away_OR}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {away_FT}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {away_PPP}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody> 
                </Table>
              </TableContainer>
            </Grid>
          );
        }

        let tempoFreeGraph;
        if (this.props.homeBox.playerTotals.points && home_PPP) {
          
          var hFG = parseFloat(home_eFG);
          var aFG = parseFloat(away_eFG);
          var hTO = parseFloat(home_TO);
          var aTO = parseFloat(away_TO);
          var hOR = parseFloat(home_OR);
          var aOR = parseFloat(away_OR);
          var hFT = parseFloat(home_FT);
          var aFT = parseFloat(away_FT);

          tempoFreeGraph = (
                <Grid item style={{ maxWidt: '95vw' }}>
                  <Chart
                    width={ '80vw' }
                    height={ '30vh' }
                    chartType='ColumnChart'
                    loader={<div>Loading Tempo Free Chart...</div>}
                    data={[
                      ['Team', this.props.homeInfo.shortName, { role: 'annotation'}, this.props.awayInfo.shortName, { role: 'annotation', type: 'string' } ],
                      ['Shooting', hFG, home_eFG, aFG, away_eFG ],
                      ['Ball Handling', hTO, home_TO, aTO, away_TO ],
                      ['Off Rebounding', hOR, home_OR, aOR, away_OR ],
                      ['Shooting FTs', hFT, home_FT, aFT, away_FT ],
                    ]}
                    options={{
                      title: this.props.homeInfo.shortName + ' ' + this.props.homeBox.playerTotals.points + ', ' + this.props.awayInfo.shortName + ' ' + this.props.awayBox.playerTotals.points,
                      alignment: 'center',
                      chartArea: { width: '90%' },
                      legend: { position: 'bottom', alignment: 'center' },
                      backgroundColor: '#eeeeee',
                      colors: [ this.props.homeInfo.color, this.props.awayInfo.color ],
                      vAxis: {
                          title: 'Percent',
                          maxValue: 100,
                          textStyle: { fontSize: 11 },
                      },
                    }} />
                </Grid>
          );
        }
 
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
                    <TableRow hover>
                      <TableCell style={homeTeamCellStyle}>
                        <Typography variant='body2' style={homeTeamCellStyle}>
                          {this.props.homeInfo.shortName}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.points}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.fieldGoalsMade}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.fieldGoalPercentage}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.threePointsMade}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.threePointPercentage}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.freeThrowsMade}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.freeThrowPercentage}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.totalRebounds}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.offensiveRebounds}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.assists}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.personalFouls}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.steals}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.turnovers}
                        </Typography>
                      </TableCell>
                      <TableCell style={dataCellStyle}>
                        <Typography variant='body2' style={dataCellStyle}>
                          {this.props.homeBox.playerTotals.blockedShots}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell style={awayTeamCellStyle}>
                        <Typography variant='body2' style={awayTeamCellStyle}>
                          {this.props.awayInfo.shortName}
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
                          <TableCell style={nameHeaderStyle}>
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
            {tempoFree}
            {tempoFreeGraph}
            {totalStats}
            {homeStats}
            {awayStats}
          </Grid>
        );
    }
}

export default BoxScore;
