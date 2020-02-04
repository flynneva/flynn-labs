import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import SportsIcon from '@material-ui/icons/Sports';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AndroidIcon from '@material-ui/icons/Android';

const useStyles = makeStyles({
    root: {
        width: '98%',
        position: 'fixed',
        bottom: 0
    }
});

function BottomNav () {
    const classes = useStyles();
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            className={classes.root}
        >
            <BottomNavigationAction
                component={Link}
                to="/"
                label="Home"
                value="home"
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                component={Link}
                to="/sports"
                label="Sports"
                value="sports"
                icon={<SportsIcon />}
            />
            <BottomNavigationAction
                component={Link}
                to="/finance"
                label="Finance"
                value="finance"
                icon={<MonetizationOnIcon />}
            />
            <BottomNavigationAction
                component={Link}
                to="/robotics"
                label="Robotics"
                value="robotics"
                icon={<AndroidIcon />}
            />
        </BottomNavigation>
    );
}

export default BottomNav;
