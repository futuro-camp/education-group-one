import React from "react";
import Header from "../header";
import Card from "../content";
import Footer from "../footer";
import "./style.css";
import { connect } from "react-redux";

function wrapper(props) {
    return (
        <div className="wrapper">
            <Header complited={props.doneCounter} total={props.totalCounter}/>
            <div className="cardsList">
                { props.taskList.map((element) => <Card id={element.id} key={element.id} name={element.name} status={element.status}/>)}
            </div>
            <Footer/>
        </div>
    );
}

const stateToProps = (state) => ({
    taskList: state.taskList,
    doneCounter: state.doneCounter,
    totalCounter: state.totalCounter
});

export default connect(stateToProps)(wrapper)
