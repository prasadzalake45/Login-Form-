import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>

<    AppBar position="sticky">
        <Toolbar className='enter'>Confirm User data</Toolbar>
      </AppBar>
      <Toolbar />

      <h1>Your Form has been Successfully Submiited  for more Details check your email after some time </h1>




      </React.Fragment>

      </MuiThemeProvider>
    )
  }
}
