import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../tab-panel/tab-panel';
import NcaaPanel from '../ncaa-panel/ncaa-panel';
import ProfessionalPanel from '../professional-panel/professional-panel';

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

function ProfessionalTabs() {
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
          aria-label="sports-tabs"
        >
          <Tab label="NFL" {...a11yProps(0)} />
          <Tab label="NBA" {...a11yProps(1)} />
          <Tab label="MLB" {...a11yProps(2)} />
          <Tab label="NHL" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <NcaaPanel value={value} index={0} dir={theme.direction} />
        <ProfessionalPanel value={value} index={1} dir={theme.direction} />
        <NcaaPanel value={value} index={2} dir={theme.direction} />
        <ProfessionalPanel value={value} index={3} dir={theme.direction} />
      </SwipeableViews>
    </div>
  );
}

export default ProfessionalTabs;
