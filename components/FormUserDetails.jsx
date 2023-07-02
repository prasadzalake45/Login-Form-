import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




export default class FormUserDetails extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }

  render() {
    const {values,handleChange}=this.props;
   
    
    return (

      
      <MuiThemeProvider>
      
        

        <AppBar position="sticky" style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'20px',
        fontWeight:'bold'

      }}>
        <Toolbar className='enter'>Enter The Details</Toolbar>
      </AppBar>
      <Toolbar />




          <TextField 
          // helperText="Enter Your First Name"
          label= "First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.fistName}
          
          />
        <pre>


        </pre>
          
 
    
     <pre>
      
     </pre>
       <TextField 
          // helperText="Enter Your Email"
          label= "Email Name"
          onChange={handleChange('email')}
          defaultValue={values.email}
         
        />



      <pre></pre>
           <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              
            >Continue</Button>
       
      </MuiThemeProvider>
    )
  }
}

