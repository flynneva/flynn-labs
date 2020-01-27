import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function About () {
  const classes = useStyles();

  return (
    <div>
      <h2>About</h2>
      <p>Hey! Thanks for taking the time out of your day to read a little bit about who I am. You must be really scraping the bottom of the barrel of the internet if you are reading this right now...</p>
      <p>In short, things I like are pretty much all shown here on this website. Sports, Robotics and Finance. Things not listed on this website would be things like government, the environment, and being outside.</p>
     
      <p>A perfect Sunday for me starts off with a morning hike or run, something delicious for breakfast with a hot cup of coffee, followed up with a few hours spent at a local coffee spot working on some software or a personal project around the house.</p>

      <p>Depending on what you're interested in, feel free to check out more of this website or follow the links below. Thanks again for even reading this!</p>
      
      <Button variant='contained'
              color='primary'
              className={classes.button}
              startIcon={<GitHubIcon />} >
        GitHub
      </Button>
      <Button variant='contained'
              color='primary'
              className={classes.button}
              startIcon={<LinkedInIcon />} >
        LinkedIn
      </Button>
      <Button variant='contained'
              color='primary'
              className={classes.button}
              startIcon={<TwitterIcon />} >
        Twitter
      </Button>
  </div>
  );
}

export default About;
