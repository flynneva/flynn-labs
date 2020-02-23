import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Worldview, { Cubes, Axes} from 'regl-worldview';

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
    },
    worldView: {
      height: '50vh',
    }
}));

function Home () {
    const classes = useStyles();

    const markers = [
        {
            pose: {
                orientation: { x: 0, y: 0, z: 0, w: 1 },
                position: { x: 0, y: 0, z: 0 }
            },
            scale: { x: 15, y: 15, z: 15 },
            color: { r: 1, g: 0, b: 1, a: 0.9 }
        }
    ];
   
    return (
    <Grid container className={classes.grid} justify="center" spacing={0}>
        <Grid item xs={12} className={classes.item}>
            <Card className={classes.card}>
                <CardContent>
                    <h2>Robotics</h2>
                    <Grid container>
                      <Grid item xs={12}>
                          <p>Here is a quick little demo until I get around to doing something with this page...NOTE: this doesnt work on mobile yet so check it out on a desktop if you have a chance.</p>
                      </Grid>
                      <Grid item xs={12} className={classes.worldView}>
                        <Worldview>
                            <Cubes>{ markers }</Cubes>
                            <Axes />
                        </Worldview>
                      </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
    );
}

export default Home;
