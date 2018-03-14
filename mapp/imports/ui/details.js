import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';
import readme from './readme.json';
import Check from './checks.js';
import Drop from './dropdown.js';
import Radios from './radio.js'; 
// Task component - represents a single todo item

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { nam: '', naml: '', em: 'example@2018.com', con: 0, message: '' }
        this.fun = this.fun.bind();
        // this.validateN=this.validateN.bind(this);
        // this.validateE=this.validateN.bind(this);
        // this.validateC=this.validateN.bind(this);
    }
    componentWillMount() {
        this.setState({ nam: readme.name });
        this.setState({ naml: readme.namel });
        this.setState({ em: readme.emadd });
        this.setState({ con: readme.cont });

    }
    render() {
        let message = this.state.message;
        let nam = this.state.nam;
        let em = this.state.em;
        let con = this.state.con;
        let naml = this.state.naml;
        return (<div >
            <h2>FORM</h2>
            <Drop />
            <input type="text" placeholder="FirstName" id="namef" defaultValue={nam} onChange={this.validateN.bind(this)} />
            <input type="text" placeholder="LastName" id="namel" defaultValue={naml} onChange={this.validateN.bind(this)} />
            <input type="text" placeholder="Email" id="email" defaultValue={em} onChange={this.validateE.bind(this)} />
            <input type="tel" placeholder="Contact number" id="num" defaultValue={con} onChange={this.validateC.bind(this)} />
            <Radios />
            <h3><Check name={nam} namel={naml} email={em} contact={con} message={message} /></h3>
        </div>
        
        );
    }
    validateN(e) {
        switch (e.target.id) {
            case 'namef':
                if (e.target.value.match(/^[a-zA-Z0-9]+$/)) {
                    this.setState({ nam: e.target.value });
                }
                else {
                    this.setState({ nam: 'Invalid name' })
                }
                break;

            case 'namel':
                if (e.target.value.match(/^[a-zA-Z0-9]+$/)) {
                    this.setState({ naml: e.target.value });
                }
                else {
                    this.setState({ naml: 'Invalid name' })
                }

                break;
        }
    }
    validateE(e) {
        if (e.target.value.match(/^[A-Z][a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-z]{2,4}$/)) {
            this.setState({ em: e.target.value })
        }
        else {
            this.setState({ em: 'Invalid email' })
        }
    }
    validateC(e) {
        if (e.target.value.match(/^[0-9]{8,13}$/)) {
            this.setState({ con: e.target.value });
        }
        else {
            this.setState({ con: 'invalid number' })
        }
    }
    // componentWillReceiveProps(nextprops)
    // {
    //     console.log(nextprops);
    //     // if(nextprops.naml.match(/^[a-zA-Z]{4,100}$/))
    //     // {
    //     //     Check name={nextprops.namef} namel={nextprops.namel} email={nextprops.email} contact={nextprops.num};
    //     // }
    // }
    fun = () => {
        if(this.state.nam == readme.name)
        {
            this.setState({ message: 'Success' });
        }
    }
    shouldComponentUpdate() {
        if (this.state.nam.length >= 15) {
            return false;
        }
        else {
            return true;
        }
    }
    componentDidUpdate() {  
        if (this.state.message !== "Success") {
            this.fun();
        }
    }
}



// Details.PropTypes={name:PropTypes.string,email:PropTypes.email,num:PropTypes.number};
// Details.defaultProps={name:'name', email:'email',num='num' };
