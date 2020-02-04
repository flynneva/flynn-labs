import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../tab-panel/tab-panel';
import NcaaTabs from '../ncaa-tabs/ncaa-tabs';
import ProfessionalTabs from '../professional-tabs/professional-tabs';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 'auto'
    }
}));

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps (index) {
    return {
        "id": `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`
    };
}

function SportsTabs () {
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
                    <Tab label="NCAA" {...a11yProps(0)} />
                    <Tab label="Professional" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <NcaaTabs value={value} index={0} dir={theme.direction} />
                <ProfessionalTabs value={value} index={1} dir={theme.direction} />
            </SwipeableViews>
        </div>
    );
}

export default SportsTabs;
