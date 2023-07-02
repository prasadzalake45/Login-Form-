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
// import { red } from '@material-ui/core/colors';




export default class FormUserDetails extends Component {
    continue=e=>{
        e.preventDefault();
        //HERE TO PROCESS THE FORM
        this.props.nextStep();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }


  render() {
    const {values:{firstName,email,occupation,city,bio}}=this.props;
   
    
    return (

      
      <MuiThemeProvider>
      
        

        <AppBar position="sticky">
        <Toolbar className='enter'>Confirm User data</Toolbar>
      </AppBar>
      <Toolbar />
      


      <List>
              <ListItem>

                <ListItemText primary="Full Name" secondary={firstName} />
              </ListItem>
              
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
            </List>
      



      <pre></pre>
           <a href=''>
           <Button
              color="primary"
              variant="contained"
              
              style={styles.button}
            > Confirm&Continue</Button>
            </a>
        <pre>
       
        </pre>
        <Button
              color="primary"
              variant="contained"
              onClick={this.back}
              style={styles.button}
            > Back</Button>
       
      </MuiThemeProvider>
    )
  }
}
const styles={
  button:{
   margin:10,
   

  }
}
