import React, {Component} from "react";
import "./style.css"

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { valid: true };
    }
    
    validateEmail = (event) => {
        if(event.target.value.length > 0 && event.target.value.match(/.+@.+\..+/)) {
            this.setState({ valid: true });
        }
        else {
            this.setState({ valid: false });
        }
    }

    validatePassword = (event) => {
        if(event.target.value.length > 5) {
            this.setState({ valid: true });
        }
        else {
            this.setState({ valid: false });
        }
    }

    render() {
        if(this.props.email) {
            return <input className={ this.state.valid ? "" : "invalid"} type="text" placeholder={this.props.placeholder} onKeyPress={this.validateEmail} ref={ (input) => {this.instance = input} }/>
        }
        else if(this.props.password) {
            return <input className={ this.state.valid ? "" : "invalid"} type="password" placeholder={this.props.placeholder} onKeyPress={this.validatePassword} ref={ (input) => {this.instance = input} }/>
        }
        else if(this.props.text) {
            return <input type="text" placeholder={this.props.placeholder} ref={ (input) => {this.instance = input} }/>
        }
    }
}
