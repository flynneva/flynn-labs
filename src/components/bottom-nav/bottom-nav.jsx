import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AndroidIcon from '@material-ui/icons/Android';


function BottomNav () {
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navStyle = {
      width: '100vw',
      position: 'fixed',
      bottom: 0,
      height: '75px'
    }

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            style={navStyle}
        >
            <BottomNavigationAction
                component={Link}
                to="/"
                label="Home"
                value="home"
                icon={<HomeIcon style={{ fontSize: 27 }} />}
            />
            <BottomNavigationAction
                component={Link}
                to="/sports/ncaa/basketball-men/"
                label="Basketball"
                value="basketball"
                icon={<SportsBasketballIcon style={{ fontSize: 27 }} />}
            />
            <BottomNavigationAction
                component={Link}
                to="/finance"
                label="Finance"
                value="finance"
                icon={<MonetizationOnIcon style={{ fontSize: 27 }} />}
            />
            <BottomNavigationAction
                component={Link}
                to="/robotics"
                label="Robotics"
                value="robotics"
                icon={<AndroidIcon style={{ fontSize: 27 }} />}
            />
        </BottomNavigation>
    );
}

export default BottomNav;
