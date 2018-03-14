import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Task component - represents a single todo item
export default class Drop extends Component {
    constructor(props){
        super(props);
        this.state={inputValue:''};
        this.onChanges=this.onChanges.bind(this);
    }
    onChanges(e)
    {
        let inputValue=this.props.state;
        this.setState({inputValue:e.target.value});
    }
    
  render() {
    let {inputValue}=this.state;
     return (
        <div className="col">
          <label>Age</label>
      <select onChange={this.onChanges.bind(this)}>
          <option  >0-20</option>
          <option>20-50</option>
          <option>More than 50</option>
      </select>{inputValue}</div>
    );

  }
}  