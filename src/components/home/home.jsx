import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import GitHubIcon from '@material-ui/icons/GitHub';

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

function Home () {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container className={classes.grid} justify='center' spacing={2}>
          <Grid item xs={8} justify='center'>
            <Card className={classes.card}>
              <CardContent>
                <h2>Welcome</h2>
                <p>Hope you enjoy your time here and find something useful. This site is just a hobby for me, so apologies if you find something broken or missing. Feel free to reach out via twitter, email, or github if you have any questions</p>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button variant='extended' size="medium" startIcon={<InfoIcon />} href='about'>About</Button>
                <Button variant='extended' size="medium" startIcon={<HelpIcon />} href='contact'>Contact</Button>
                <Button variant='extended' size="medium" startIcon={<GitHubIcon />} href='https://github.com/flynneva'>Github</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
