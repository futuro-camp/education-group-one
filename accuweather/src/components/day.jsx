import React from "react";
import { connect } from "react-redux";
import { changeDay } from "../actions/actions";
import icons from "../icons";

const Day = ( { store, changeDay } ) => {
    return (
        <div>
            <ul className="days">
                { store.forecast.map( (el) =>
                    <li key={el.id}>
                        <button className="day" onClick={ () => changeDay(el.id) } >
                            <li> <p className="date">{el.date}</p> </li>
                            <li><img className="imageIcon" src={icons[el.day.icon]} alt={el.day.icon}/></li>
                            <ul className="dayProperties">
                                <li> <b>Min:</b> {el.temperature.min} </li>
                                <li> <b>Max:</b> {el.temperature.max} </li>
                            </ul>
                        </button>
                    </li>
                ) }
            </ul>
        </div>
    )
};

const mapStateToProps = ( store ) => { return { store }; };
const dispatchToProps = ( dispatch ) => { return  { changeDay: (id) => { dispatch( changeDay(id) ); } };  };
export default connect (mapStateToProps, dispatchToProps)(Day);
