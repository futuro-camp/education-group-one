import React from "react";
import "./content.css";
import {connect} from "react-redux";
import { checkStatus, removeTask } from "../actions";

function Card(props) {
    let {text,status,id,checker,remover} = props;
    return (
        <li>
            <input  type="checkbox"
                    className="checkbox"
                    defaultChecked={status} onClick={() => {checker(id); }}/>
            <input  className={status ? "item ready" : "item"}
                    type="text"
                    defaultValue={text}/>
            <button className="button" onClick={() => {remover(id);}}>Del ID:{id}</button>
        </li>
    );
}
const Schedule = ({list, checker,remover}) => {
    return (
        <ul>
            {list.map((elem) => <Card
                status={elem.status}
                text={elem.name}
                id={elem.id}
                key={elem.id}
                checker={checker}
                remover={remover}/>
            )}
        </ul>
    );
}
//Implemented states-data (which is a storage) to Component's props
const mapStateToProps = (state) => ({
    list:state.list
})
  //Implemented states-functions (which is action ) to Component's props
const dispatchToProps = (dispatch) => ({
    checker: (id) => dispatch(checkStatus(id)),
    remover: (id) => dispatch(removeTask(id))
});
  //Connecting these to the Card-Component and export this Component
export default connect (mapStateToProps, dispatchToProps)(Schedule);
