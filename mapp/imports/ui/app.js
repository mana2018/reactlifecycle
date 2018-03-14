import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Drop from './dropdown.js';
import Details from './details.js';
import Radios from './radio.js'; 
import Check from './checks.js';
export default class App extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
 return(<div className="container" >
      <Details />
 </div>);
  }
}