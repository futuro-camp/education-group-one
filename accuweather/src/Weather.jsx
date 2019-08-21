import React, { useEffect } from "react";
import "./Weather.css";
import { connect } from "react-redux";
import Day from "./components/day";
import Choice from "./components/choice";
import { getWeather } from "./actions/actions";
import PropTypes from 'prop-types';

const Content = ( { getWeather } ) => {

    useEffect( () => {
        getWeather();
    }, []);
    // console.log(store);

    return (
        <div className="Content">
            <Day />
            {/* trying to make something like lazyloading with checking boolean variable */}
            <Choice />
        </div>
    );
};
Content.propTypes = {
    current: PropTypes.func
};

const mapStateToProps = ( store ) => { return { store }; };
const dispatchToProps = ( dispatch ) => { return {getWeather: () => { dispatch( getWeather() ); } }; };
export default connect (mapStateToProps, dispatchToProps)(Content);
