import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SportsIcon from '@material-ui/icons/Sports';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AndroidIcon from '@material-ui/icons/Android';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  fabButton: {
    margin: 0,
    top: 20,
    bottom: 'auto',
    left: 20,
    right: 'auto',
    position: 'fixed',   
  },
}));

function NavDrawer() {

  const classes = useStyles(); 
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  }); 

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const menuList = side => (
    <div  className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {[ 'Home', 'Sports', 'Finance', 'Robotics'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              { index  === 0 ? <HomeIcon /> :
                index === 1 ? <SportsIcon /> :
                index === 2 ? <MonetizationOnIcon /> : <AndroidIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return(
    <Grid container spacing={1}>
      <Grid item>
        <Fab className={classes.fabButton} onClick={toggleDrawer('left', true)}><MenuIcon /></Fab>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {menuList('left')}
        </Drawer>
      </Grid>
    </Grid> 
  );
}

export default NavDrawer;
