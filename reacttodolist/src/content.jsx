import React from "react";
import "./content.css";

function Card(props) {
    let {text,status,id,checker,remover} = props;
    return (
        <li>
            <input  type="checkbox"
                    className="checkbox"
                    defaultChecked={status} onClick={() => {checker(id); }}/>
            <input  className={status ? "ready" : ""}
                    type="text"
                    className="item"
                    defaultValue={text}/>
            <button className="button" onClick={() => {remover(id);}}>Del ID:{id}</button>
        </li>
    );
}

const Schedule = ({list, checker,remover}) => {
    return (
        <ul className="">
            {list.map((elem) => <Card   status={elem.status}
                                        text={elem.text}
                                        id={elem.id}
                                        key={elem.id}
                                        checker={checker}
                                        remover={remover}/>)}
        </ul>
    );
};

export default Schedule;
