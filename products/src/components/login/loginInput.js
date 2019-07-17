import React, {Component} from "react";

export default class LoginInput extends Component {
    constructor(props){
        super(props);
    }

    validateEmail(){
        // console.log("Email typed");
    }

    validatePassword(){
        // console.log("Password typed");   
    }
    
    render(){
        if(this.props.email){
            return (<input   type="text"
                            placeholder="Email..."
                            onKeyUp={this.validateEmail}
                            ref={(input) => { this.input = input; }}
                            />);
        } else if(this.props.password){
            return (<input   type="password"
                            placeholder="Password..."
                            onKeyUp={this.validatePassword}
                            ref={(input) => {this.input = input; }}
                            />);
        }
    }
}