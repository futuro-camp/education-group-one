import React from 'react';
import './login.css';

function Login() {
    return(
        <div className="login">
            <h1>Start Working 💻</h1>
            <label htmlFor="email">Email 📬</label>
            <input className="email" type="email" autoFocus="autofocus"/>
            <label htmlFor="password">Password 📜</label>
            <input className="password" type="password"/>
            <button>Sign In 🔭</button>
        </div>
    )
}

export default Login;
