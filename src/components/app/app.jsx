import React from 'react';
import './app.css';
import Grid from '@material-ui/core/Grid';
import NavDrawer from '../nav-drawer/nav-drawer';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs>
          <header className="App-header">
            <NavDrawer />
            <p>
              THIS SHOULD BE THE HEADER
            </p>
          </header>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
