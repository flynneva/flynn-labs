import React from 'react';
import { Link } from 'react-router-dom';
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
    grid: {
        justifyContent: 'center',
        height: '100vh',
    },
    item: {
      textAlign: 'center',
      margin: '8px',
    },
    cardActions: {
        justifyContent: 'center'
    }
}));

function Home () {
    const classes = useStyles();

    return (
    <Grid container className={classes.grid} justify="center" spacing={0}>
        <Grid item xs={12} className={classes.item}>
            <Card className={classes.card}>
                <CardContent>
                    <h2>Welcome</h2>
                    <p>
                      Hope you enjoy your time here and find something useful. This
                      site is just a hobby for me, so apologies if you find
                      something broken or missing. Feel free to reach out via
                      twitter, email, or github if you have any questions
                    </p>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="medium" startIcon={<InfoIcon />}
                            component={Link}
                            to="/about">
                      About
                    </Button>
                    <Button size="medium" startIcon={<HelpIcon />}
                            component={Link}
                            to="/contact">
                      Contact
                    </Button>
                    <Button
                        size="medium"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/flynneva/flynn-labs">
                      Source
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
    );
}

export default Home;
