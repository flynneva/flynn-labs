import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    justifyContent: 'center',
  },
  card: {
  },
  cardActions: {
    justifyContent: 'center',
  },
}));

function Finance () {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container className={classes.grid} justify='center' spacing={2}>
          <Grid item xs={8} justify='center'>
            <Card className={classes.card}>
              <CardContent>
                <h2>Finance</h2>
              </CardContent>
              <CardActions className={classes.cardActions}>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Finance;