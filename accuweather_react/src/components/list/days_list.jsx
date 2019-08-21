import React, { Component } from "react";
import { connect } from "react-redux";
import Day from "./day";
import { currentDayChoosed } from "../../redux/actions";
import PropTypes from "prop-types";
import Icons from "../../static/icons.js";
import "../../styles/list/days_list.scss";

function mapStateToProps(state) {
    return {
        daysData: state.daysData,
        currentChoosed: state.currentChoosed
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: (id) => dispatch(currentDayChoosed(id))
    };
}

class days_list extends Component {

    render() {
        return (
            <ul className="days-list">
                {this.props.daysData.map((element) => element.id === this.props.currentChoosed ? <Day key={element.id} date={new Date(element.date).toLocaleDateString("en-US", { day: "numeric", month: "long" })} iconDay={Icons[element.day.icon]} iconNight={Icons[element.night.icon]} temperature={element.temperature} onClick={()=>{currentDayChoosed(element.id)}} choosed/> : <Day key={element.id} date={new Date(element.date).toLocaleDateString("en-US", { day: "numeric", month: "long" })} iconDay={Icons[element.day.icon]} iconNight={Icons[element.night.icon]} temperature={element.temperature} onClick={()=>{this.props.onClick(element.id)}}/>)}
            </ul>
        );
    }
}

days_list.propTypes = {
    daysData: PropTypes.array,
    currentChoosed: PropTypes.number    
};

export default connect(mapStateToProps, mapDispatchToProps)(days_list);
