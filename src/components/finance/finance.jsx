import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
    grid: {
        justifyContent: 'center',
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
                    <h2>Finance</h2>
                    <p>This page still needs some work....give me some time to get it working and check back soon!</p>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="medium" startIcon={<InfoIcon />}
                            component={Link}
                            to="stock-analyzer">
                      Stock Analyzer
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
    );
}

export default Home;
