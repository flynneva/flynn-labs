import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import PublicIcon from '@material-ui/icons/Public';
import AndroidIcon from '@material-ui/icons/Android';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

function ListItemLink (props) {
    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
        () =>
            React.forwardRef((itemProps, ref) => (
                <RouterLink to={to} ref={ref} {...itemProps} />
            )),
        [to]
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

function NavDrawer () {
 
    const rootStyle = {
        flexGrow: 1
    };

    const listStyle = {
        width: 250
    };

    const fullListStyle = {
        width: 'auto'
    };

    const fabButtonStyle = {
        margin: 0,
        top: 'auto',
        bottom: 20,
        left: 20,
        right: 'auto',
        position: 'fixed'
    };

    const drawerTitleStyle = {
        textAlign: 'left',
        margin: '16px'
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' || event.type === 'click')
      {
        setState({ ...state, [side]: open });
      }
    };

    const menuList = side => (
        <div
            style={listStyle}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <Typography variant="h4" style={{ padding: '8px' }}>
              Flynn Labs
            </Typography>
            <List component="nav">
                {['Home', 'NCAA Sports', 'Robotics', '3D Sandbox'].map((text, index) => (
                    <ListItemLink
                        key={index}
                        to={
                            index === 0 ?
                                '/' :
                                index === 1 ?
                                    '/sports/ncaa/' :
                                    index === 2 ?
                                        '/robotics' :
                                        '/three'
                        }
                        icon={
                            index === 0 ? (
                                <HomeIcon />
                            ) : index === 1 ? (
                                <SportsBasketballIcon />
                            ) : index === 2 ? (
                                <AndroidIcon />
                            ) : (
                                <PublicIcon />
                            )
                        }
                        primary={text}
                    />
                ))}
            </List>
            <Divider />
            <List component="nav">
                {['About', 'Contact'].map((text, index) => (
                    <ListItemLink
                        key={index}
                        to={index === 0 ? '/about' : '/contact'}
                        icon={index === 0 ? <InfoIcon /> : <ContactSupportIcon />}
                        primary={text}
                    />
                ))}
            </List>
        </div>
    );

    return (
      <Grid container spacing={0}>
        <Grid item>
          <Fab style={fabButtonStyle} color="primary" onClick={toggleDrawer('left', true)}>
            <MenuIcon style={{ fill: 'white' }} />
          </Fab>
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {menuList('left')}
          </Drawer>
        </Grid>
      </Grid>
    );
}

export default NavDrawer;
