import React from "react";
import { connect } from "react-redux";
import Task from "../task";

const Content = ({list}) => (
    <ul className="content">    
        {list.map((task) => (
            <Task   key={task.id} 
                    id={task.id} 
                    name={task.name} 
                    status={task.status} />))}
    </ul>
)

export default connect(
    (state) => ({
        list: state.list,
    })
)(Content);
