import React from "react";

export default function Header({marked, count}){
    return (
        <div className="header">
            <input type="text" placeholder="name" />
            <p>{marked}/{count}</p>
        </div>
    );
}
