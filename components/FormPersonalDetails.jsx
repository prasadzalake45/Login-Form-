import React, { Component } from 'react'

// import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';



import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';





export default class FormPersonalDetails extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }

    
  render() {
    const {values,handleChange}=this.props;
    
    
    return (
      <MuiThemeProvider>
        <React.Fragment>
        
        <AppBar position="sticky"
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'20px',
            fontWeight:'bold'
    
          }}>
        <Toolbar className='enter'>Enter  User data</Toolbar>
      </AppBar>
      <Toolbar />


        <TextField 
        //   helperText="Enter Your Occupation"
          label= "Occupation"
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
          
          />
          <pre></pre>

          <TextField 
        //   helperText="Enter Your City"
          label= "City"
          onChange={handleChange('city')}
          defaultValue={values.city}
          
          />
          <pre></pre>
          

          <TextField 
        //   helperText="Enter Your Bio"
          label= "Bio"
          onChange={handleChange('bio')}
          defaultValue={values.bio}
          
          />
          
          
<pre></pre>

          <Button 
            style={{
                display:'flex'
                

            }}
              color="secondary"
              variant="contained"
              onClick={this.continue}

            >Continue</Button>
        <pre></pre>
     
    <div className='division'>

       <Button
             style={{
                backgroundColor:'white',
                color:'black'
             }}
              color="primary"
              variant="contained"
              onClick={this.back}
           
            >Back</Button>
        </div>
           </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
