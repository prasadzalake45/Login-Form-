import React, { Component } from 'react'

import FormUserDetails from "./FormUserDetails.jsx"
import FormPersonalDetails from './FormPersonalDetails.jsx';
import Confirm from './Confirm.jsx';
import Success from './Success.jsx';





export default class UserForm extends Component {
    //Object
     state={
        step:1,
        firstName:'',
        
        email:'',
        occupation:'',
        city:'',
        bio:''
     }
     // proceed action
     //Go to  next Step
     nextStep=()=>{
        const{step}=this.state;    // descructive assignment tio extract step from state object
        this.setState({           //is updating the value of the step property in the component's state by calling the setState method with a new object.
            step:step+1
        })

     }
     //Go to  Previos   Step
     prevStep=()=>{
        const{step}=this.state;    
        this.setState({           
            step:step-1
        })

     }
     //Handle Field changes
     handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      }

      
  render() {
    const {step}=this.state
    const {firstName,email,occupation,city,bio}=this.state;
    const values={firstName,email,occupation,city,bio}
     
    switch(step){
        case 1:
            return(
                <FormUserDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            )
        case 2:
            return(
                <FormPersonalDetails
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                
                />
            )
        case 3:
            return(
                   <Confirm
                   prevStep={this.prevStep}
                   nextStep={this.nextStep}
                  handleChange={this.handleChange}
                   values={values}
                   
                   
                   />
                )
        case 4:
            return(
                        <Success/>
                    )
        
        
    }

    
    
  }
}

