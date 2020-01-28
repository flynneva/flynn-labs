import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
