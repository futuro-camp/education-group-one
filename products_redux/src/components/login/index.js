import React from "react";
import { connect } from "react-redux";
import { emailInputChanged, passwordInputChanged, login, loginErrorClear } from "../../actions";

const LoginPage = ({email, password, error, fetch, changeEmailInput, changePasswordInput, login, errorClear, valid}) => (
    <div className="login-screen">
        <button     id="errorMsg" 
                    className={error ? "" : "canceled"}
                    onClick={errorClear}>
            {error.toString()}
        </button>
        <input  type="text"
                className={valid(email) ? "" : "invalid"}
                placeholder="Email..."
                onChange={(e) => { changeEmailInput(e); }}
                value={email}/>
        <input  type="password"
                className={valid(password) ? "" : "invalid"}
                placeholder="Password..."
                onChange={(e) => { changePasswordInput(e); }}
                value={password}/>
        {fetch ? 
        <button disabled>
            <div className="loader"></div>
        </button> 
            :
        <button onClick={() => { login(email, password); }}>
            Log in
        </button>
        }
    </div>
);

export default connect(
    (state) => ({
        email: state.loginReducer.login,
        password: state.loginReducer.password,
        error: state.loginReducer.error,
        fetch: state.loginReducer.fetch,
    }),
    (dispatch) => ({
        changeEmailInput: (e) => { dispatch(emailInputChanged(e.target.value)); },
        changePasswordInput: (e) => { dispatch(passwordInputChanged(e.target.value)); },
        login: (email, password) => { dispatch(login(email, password)); },
        errorClear: () => { dispatch(loginErrorClear()); },
        valid: (value) => value.trim().length > 2
    })
)(LoginPage);
