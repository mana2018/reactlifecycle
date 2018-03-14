import React, { Component } from 'react';
import PropTypes from 'prop-types';
import readme from './readme.json'
import Check from './checks.js'
// Task component - represents a single todo item
export default class Radios extends Component {
    constructor(props){
        super(props);
        this.state={inputValue:''};
        this.onChanges=this.onChanges.bind(this);
    }
    componentWillMount() {
        this.setState({inputValue:readme.gender});
    }
    onChanges(e)
    {
        let inputValue=this.props.state;
         this.setState({inputValue:e.target.value})
    }
    onChange()
        {
            if(this.state=="Male")
            {
                document.getElementById('genM').checked=true;
            }
            else{
                document.getElementById('genF').checked=true;
            }
        }
    
  render() {

     let {inputValue}=this.state;
     return (
         <div className="col">
             <input type="radio" name="gender" id="genM" value="male" defaultChecked  onChange={this.onChanges.bind(this)}/>Male
             <input type="radio" name="gender" id="genF" value="female"  onChange={this.onChanges.bind(this)} />Female
             {this.onChange.bind(this)}
             <h3>You selected</h3>
             {inputValue}
             {/* <h3><Check gender={inputValue}/></h3> */}
              </div>     
        
     );
  }

}  