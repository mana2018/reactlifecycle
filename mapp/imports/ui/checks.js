import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';
export default class Check extends Component {
    constructor(props){
        super(props);
    }
    render()
    {    return(
    <div>
        <div>
            {this.props.message}
        </div>
        <div>{this.props.name}
        </div>
        <div>{this.props.namel}
        </div>
        {/* <div>{this.props.gender}
        </div> */}
        <div>{this.props.email}</div>
         <div>{this.props.contact}</div>
        </div>);
    }
}
// export  class Check2 extends Component  {
//     constructor(props){
//         super(props);
//     }
// render()
// {
    
//     return(<div className="row container">
//     <div className="col" >{msg1}</div>
//     <div className="col">{nam1}</div>
//     <div className="col">{naml1}</div>
//     <div className="col">{gen1}</div>
//      <div className="col" >{email1}</div>
//      <div className="col"> {cont1}</div>
//     </div>
//     );
// }
// }

// Check.propTypes=
// {
//     name:PropTypes.string.isRequired ,
//     email:emailPropType.isRequired,
//     contact:PropTypes.number
// };