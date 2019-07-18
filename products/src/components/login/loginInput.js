import React, {Component} from "react";

export default class LoginInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            valid: false,
        };
        this.validate = this.validate.bind(this);
    }

    validate(e){
        if(e.key === "Enter"){
            e.target.blur();
            return;
        }
        this.setState({
            valid: /\w{3,}/.test(this.input.value.trim())
        });  
    }
    
    render(){
        if(this.props.email){
            return (<input  type="text"
                            className={this.state.valid ? "" : "invalid"}
                            placeholder="Email..."
                            onKeyUp={this.validate}
                            ref={(input) => { this.input = input; }}
                            />);
        } else if(this.props.password){
            return (<input  type="password"
                            className={this.state.valid ? "" : "invalid"}
                            placeholder="Password..."
                            onKeyUp={this.validate}
                            ref={(input) => {this.input = input; }}
                            />);
        }
    }
}
