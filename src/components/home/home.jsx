import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
  },
}));

function Home () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Welcome</h2>
    </div>
  );
}

export default Home;
