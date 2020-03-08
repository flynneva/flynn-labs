import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import World from '../three/world/World';

function Robotics () {

    const gridStyle = {
      width: '100vw',
      height: '100%',
      minHeight: '100vh',  
    }
   
    return (
    <Grid container justify="center" spacing={1} style={gridStyle}>
        <Grid item xs={11}>
            <Card>
                <CardContent>
                    <Typography variant='h4' style={{ textAlign: 'center' }}>Robotics</Typography>
                    <br></br>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Typography variant='body2' style={{ textAlign: 'center' }}>
                          Here is a quick demo until I get some time to add actual functionality to this page. Hope you like it!
                        </Typography>
                      </Grid>
                      <Grid item xs={12} style={{ height: '65vh', marginBottom: 8 }}>
                        <World>
                         
                        </World>
                      </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
    );
}

export default Robotics;
