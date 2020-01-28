import React, { Component } from 'react';
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
      height: 10,
      width: 'auto',
      justifyContent: 'right',
      margin: 1,
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
    
    // wrap this component in a Grid component and add your spacing there
    return (
      <Card style={cardStyle} spacing={0}>
        <CardContent style={cardContentStyle}>
          <List style={gameStyle}>
            <ListItem style={headerStyle}>      
              Clock
            </ListItem>
            <ListItem style={homeStyle}>
              {this.props.homeTeam}
            </ListItem>
            <ListItem style={awayStyle}>
              {this.props.awayTeam}
            </ListItem>
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default GameCard;
