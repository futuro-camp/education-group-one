import React, {Component} from "react";
import "./style.css";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { valid: true };
        this.valid = false;
    }
    
    validateEmail = (event) => {
        if(event.target.value.length > 0 && event.target.value.match(/.+@.+\..+/)) {
            this.setState({ valid: true });
            this.valid = true;
        }
        else {
            this.setState({ valid: false });
            this.valid = false;
        }
    }

    validatePassword = (event) => {
        if(event.target.value.length > 3) {
            this.setState({ valid: true });
            this.valid = true;
        }
        else {
            this.setState({ valid: false });
            this.valid = false;
        }
    }

    render() {
        if(this.props.email) {
            return <input className={ this.state.valid ? "" : "invalid"} type="text" placeholder={this.props.placeholder} onChange={this.validateEmail} ref={ (input) => {this.instance = input;} }/>;
        }
        else if(this.props.password) {
            return <input className={ this.state.valid ? "" : "invalid"} type="password" placeholder={this.props.placeholder} onChange={this.validatePassword} ref={ (input) => {this.instance = input;} }/>;
        }
        else if(this.props.text) {
            this.valid = true;
            return <input type="text" placeholder={this.props.placeholder} ref={ (input) => {this.instance = input;} }/>;
        }
    }
}
