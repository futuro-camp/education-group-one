import React from "react";
import "./content.css";

function Card(props) {
    let {text,status,id,checker,remover} = props;
    return (
        <li>
            <input  type="checkbox"
                    defaultChecked={status} onClick={() => {checker(id); }}/>

            <input  className={status ? "ready" : ""}
                    type="text"
                    defaultValue={text}/>

            <button onClick={() => {remover(id);}}>Del id {id}</button>
        </li>
    );
}

const Schedule = ({list, checker,remover}) => {
    return (
        <ul>
            {list.map((elem) => <Card   status={elem.status}
                                        text={elem.text}
                                        id={elem.id}
                                        key={elem.id}
                                        checker={checker}
                                        remover={remover}/>)}
        </ul>
    )
}

export default Schedule;
