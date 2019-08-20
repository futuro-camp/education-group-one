import React from "react";
import { connect } from "react-redux";
import { daySelect } from "../../actions";
import { dataArray } from "../../constants";
import "../../../style/list.scss";

const List = ({ weather, daySelect }) => (
    <ul className="nav">
        {weather.map((element) => (
            <li key={element.id} className="nav-item">
                <button className="nav-btn">
                    <p className="nav-date">{element.date}</p>
                    <div className="nav-icon">
                        <div className="nav-dayIcon"><img src={dataArray[element.day.icon]}/></div>
                        <div className="nav-nightIcon"><img src={dataArray[element.night.icon]}/></div>
                    </div>
                    <p className="nav-temperature">{element.temperature.min}-{element.temperature.max}</p>
                </button>
            </li>
        ))}
    </ul>
);

export default connect(
    ({ weather }) => ({
        weather
    }),
    (dispatch) => ({
        daySelect: (id) => { dispatch(daySelect(id)); }
    })
)(List);
