import React from "react";

export default function Header({name, marked, count, changeName}){
    return (
        <div className="header">
            <input type="text" 
                    defaultValue={name} 
                    onBlur={changeName}
                    onKeyUp={(e) => {
                        if(e.key === "Enter"){
                            e.target.blur();
                        } else if(e.key === "Escape"){
                            e.target.value = "";
                            e.target.blur();
                        }
                    }}/>
            <p>
                <span className="marked">{marked}</span>
                /
                <span className="count">{count}</span>
            </p>
        </div>
    );
}
