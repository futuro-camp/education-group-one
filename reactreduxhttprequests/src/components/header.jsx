import React from "react";
import "../styles/header.css";
import { browserHistory } from "../App";
import {connect} from "react-redux";
import { exit } from "../actions/loginActions";

function goHome(auth) {
    // if(auth!=="not keygen from server") {
        browserHistory.push("/api/providers");
    // }
}
const CustomButton = (props) => {
    return (
        <button onClick={() => {goHome(props.auth);}}>{props.name}</button>
    );
};
function CustomButtonQuit(props) {
    return (
        <button onClick={() => {props.function();}}>{props.name}</button>
    );
}
const Header = (props) => {
    const { auth } = props.userState;
    console.log("you have : " + auth);
    return (
        <div className="navigation">
            <CustomButton auth={auth} name="Home"/>
            <CustomButton auth={auth} name="Contacts"/>
            <CustomButton auth={auth} name="About"/>
            <CustomButtonQuit function={props.exit} name="LogOff ❌"/>
        </div>
    );
};

const mapStateToProps = (state) => { return { userState: state.userReducer }; };
const dispatchToProps = function(dispatch) { return ( { exit: () => dispatch( exit() ) } ); };
export default connect (mapStateToProps, dispatchToProps)(Header);
