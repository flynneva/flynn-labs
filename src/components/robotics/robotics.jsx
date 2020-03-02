import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Worldview, { Spheres, Axes} from 'regl-worldview';

function Home () {

    let markers = [];
    
    const x = 5;
    const y = 5;
    const z = 5;
    const step = 5;
    for(let i = -((x+step)/2); i <= x;  i++) {
      for(let j = -((y+step)/2); j <= y; j++) {
        for(let k = -((z+step)/2); k <= z; k++) {
           markers.push({
                pose: {
                    orientation: { x: 0, y: 0, z: 0, w: 1 },
                    position: { x: i * step, y: j* step, z: k * step }
                },
                scale: { x: 1, y: 1, z: 1 },
                color: { r: 0, g: 1, b: 1, a: 0.9 }
           });
        }
      }
    }
//    markers = [
//        {
//            pose: {
//                orientation: { x: 0, y: 0, z: 0, w: 1 },
//                position: { x: 5, y: 5, z: 5 }
//            },
//            scale: { x: 1, y: 1, z: 1 },
//            color: { r: 0, g: 1, b: 1, a: 0.9 }
//        }
//    ];

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
                          <Typography variant='body2' style={{ textAlign: 'center' }}>Here is a quick little demo until I get around to doing something with this page...NOTE: this doesnt work on mobile yet so check it out on a desktop if you have a chance.</Typography>
                      </Grid>
                      <Grid item xs={12} style={{ height: 500, marginBottom: 8 }}>
                        <Worldview>
                            <Spheres>{ markers }</Spheres>
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
