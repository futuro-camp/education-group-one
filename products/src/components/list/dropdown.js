import React from "react";

export default ({options, callback}) => (
    <div className="list_dropdown">
        <select onChange={callback}>
            {options.map((option) => 
                <option key={option.id}>
                    {option.name}
                </option>
            )}
        </select>
    </div>
);
