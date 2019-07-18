import React, {useState} from "react";
import {Redirect} from "react-router-dom";

export default () => {
    let [logOut, goToLogIn] = useState(false);

    return (
        <div className="header">
            {logOut ? <Redirect to="/login" /> : null}
            <button onClick={() => {
                localStorage.removeItem("auth");
                goToLogIn(logOut = true);
            }}>
                Log out
            </button>
        </div>        
    );
}
