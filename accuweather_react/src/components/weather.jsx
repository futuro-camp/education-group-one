import React, { Component } from "react";
import { connect } from "react-redux";
import DaysList from "./list/days_list";
import { fiveDaysGet } from "../redux/actions";
import DayAmply from "./day/day_amply";
import PropTypes from "prop-types";
import "../styles/weather.scss";

function mapStateToProps(state) {
    return {
        loading: state.daysLoading,
        error: state.daysLoadError
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onMount: () => dispatch(fiveDaysGet()),
    };
}

class weather extends Component {

    componentWillMount() {
        this.props.onMount();
    }
    render() {
        return (
            <div className="weather">
                <DaysList/>
                {this.props.loading ? <div className="loading">Loading...</div> : this.props.error ? <div className="loading">{this.props.error}</div> : <DayAmply/> }
            </div>
        );
    }
}

weather.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(weather);