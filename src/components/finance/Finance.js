import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';

function Home () {

    const gridStyle = {
        justifyContent: 'center',
        height: '100vh',
    }

    const itemStyle = {
      textAlign: 'center',
      margin: '8px',
    }

    const cardActionsStyle = {
        justifyContent: 'center'
    }
    
    return (
    <Grid container style={gridStyle} justify="center" spacing={0}>
        <Grid item xs={12} style={itemStyle}>
            <Card>
                <CardContent>
                    <Typography variant='h4'>Finance</Typography>
                    <br></br>
                    <Typography variant='body2'>This page still needs some work....give me some time to get it working and check back soon!</Typography>
                </CardContent>
                <CardActions style={cardActionsStyle}>
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
