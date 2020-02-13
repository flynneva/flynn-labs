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

function Contact () {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={1}>
            <Grid item xs={12}>
                <Grid container className={classes.grid} justify="center" spacing={2}>
                    <Grid item xs={10}>
                        <Card className={classes.card}>
                            <CardContent justify="left" className={classes.cardContent}>
                                <h2>Contact</h2>
                                <p>
                                Feel free to reach out through any of the channels below.
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

export default Contact;
