import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../tab-panel/tab-panel';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import SportsHockeyIcon from '@material-ui/icons/SportsHockey';
import Scoreboard from '../scoreboard/scoreboard';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 'auto',
  },
}));

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function NcaaTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="ncaa-tabs"
        >
          <Tab icon={<SportsBasketballIcon />} {...a11yProps(0)} />
          <Tab icon={<SportsFootballIcon />} {...a11yProps(1)} />
          <Tab icon={<SportsBaseballIcon />} {...a11yProps(2)} />
          <Tab icon={<SportsHockeyIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <p>Basketball</p>
          <Scoreboard />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Football
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Baseball
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Hockey
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default NcaaTabs;
