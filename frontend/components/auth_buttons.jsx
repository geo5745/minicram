import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';


export default (props) => (
        <>
            <button onClick={props.openLogin}>Login</button>
            <button onClick={props.openSignup}>Sign Up</button>
        </>
        );
