import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import SportsIcon from '@material-ui/icons/Sports';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AndroidIcon from '@material-ui/icons/Android';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    },
    fabButton: {
        margin: 0,
        top: 20,
        bottom: 'auto',
        left: 20,
        right: 'auto',
        position: 'fixed'
    },
    drawerTitle: {
        textAlign: 'left',
        margin: theme.spacing(2)
    }
}));

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
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const toggleDrawer = (side, open) => event => {
        if (
            event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const menuList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <Typography variant="h4" style={{ padding: '8px' }}>
              Flynn Labs
            </Typography>
            <List component="nav">
                {['Home', 'Sports', 'Finance', 'Robotics'].map((text, index) => (
                    <ListItemLink
                        to={
                            index === 0 ?
                                '/' :
                                index === 1 ?
                                    '/sports' :
                                    index === 2 ?
                                        '/finance' :
                                        '/robotics'
                        }
                        icon={
                            index === 0 ? (
                                <HomeIcon />
                            ) : index === 1 ? (
                                <SportsIcon />
                            ) : index === 2 ? (
                                <MonetizationOnIcon />
                            ) : (
                                <AndroidIcon />
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
                        to={index === 0 ? '/about' : '/contact'}
                        icon={index === 0 ? <InfoIcon /> : <ContactSupportIcon />}
                        primary={text}
                    />
                ))}
            </List>
        </div>
    );

    return (
        <Grid container spacing={1}>
            <Grid item>
                <Fab className={classes.fabButton} onClick={toggleDrawer('left', true)}>
                    <MenuIcon />
                </Fab>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                    {menuList('left')}
                </Drawer>
            </Grid>
        </Grid>
    );
}

export default NavDrawer;
