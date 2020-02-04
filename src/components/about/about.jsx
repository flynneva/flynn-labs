import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    grid: {},
    card: {},
    cardContent: {
        justifyContent: 'left'
    },
    cardActions: {
        justifyContent: 'center'
    }
}));

function About () {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={1}>
            <Grid item xs={12}>
                <Grid container className={classes.grid} justify="center" spacing={2}>
                    <Grid item xs={10}>
                        <Card className={classes.card}>
                            <CardContent justify="left" className={classes.cardContent}>
                                <h2>About</h2>
                                <p>
                  Thanks for taking the time out of your day to read a little
                  bit about what Flynn Labs is. Flynn Labs is just a collection
                  of things that interest me and is definetly just a hobby
                  project so please go easy on any issues/bugs you find.
                                </p>
                                <p>
                  A perfect Sunday for me starts off with a morning hike or run,
                  something delicious for breakfast with a hot cup of coffee,
                  followed up with a few hours spent at a local coffee spot
                  working on some software or a personal project around the
                  house.
                                </p>
                                <p>
                  Depending on what you're interested in, feel free to check out
                  more of this website or follow the links below. Thanks again
                  for even reading this!
                                </p>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
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
