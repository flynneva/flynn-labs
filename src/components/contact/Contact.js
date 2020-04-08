import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact () {

    const gridStyle = {
        justifyContent: 'center',
        height: '100vh',
    };

    const itemStyle = {
      textAlign: 'center',
      margin: '8px',
    };

    const cardActionsStyle = {
        justifyContent: 'center'
    };

    return (
    <Grid container style={gridStyle} justify="center" spacing={0}>
        <Grid item xs={12} style={itemStyle}>
            <Card>
               <CardContent>
                   <Typography style={{ textAlign: 'center' }} variant='h4'>Contact</Typography>
                   <br></br>
                   <Typography variant='body2' style={{ textAlign: 'center' }}>
                   Feel free to reach out through any of the channels below.
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
    );
}

export default Contact;
