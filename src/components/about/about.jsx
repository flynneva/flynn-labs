import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function About () {

    const gridStyle = {
      width: '100vw',
      height: '100%',
      minHeight: '100vh', 
    }

    return (
        <Grid container style={gridStyle} spacing={1}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={10}>
                        <Card>
                            <CardContent>
                                <Typography variant='h4' style={{ textAlign: 'center' }}>About</Typography>
                                <br></br>
                                <Typography variant='body2'>
                                  Thanks for taking the time out of your day to read a little
                                  bit about what Flynn Labs is. Flynn Labs is just a collection
                                  of things that interest me and is definetly just a hobby
                                  project so please go easy on any issues/bugs you find.
                                </Typography>
                                <br></br>
                                <Typography variant='body2'>
                                  Depending on what you're interested in, feel free to check out
                                  more of this website or follow the links below. Thanks again
                                  for even reading this!
                                </Typography>
                            </CardContent>
                            <CardActions style={{ justifyContent: 'center' }}>
                                <Button
                                    size="medium"
                                    startIcon={<GitHubIcon />}
                                    href="https://github.com/flynneva"
                                >
                  Github
                                </Button>
                                <Button
                                    size="medium"
                                    startIcon={<LinkedInIcon />}
                                    href="https://www.linkedin.com/in/evan-flynn-466b6a62/"
                                >
                  LinkedIn
                                </Button>
                                <Button
                                    size="medium"
                                    startIcon={<TwitterIcon />}
                                    href="https://twitter.com/flynneva_"
                                >
                  Twitter
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default About;
