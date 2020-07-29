import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import AuthButtons from './auth_buttons';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        let {id} = this.props.session;
        let currentUsername = '';
        const loginButton = (<button onClick={this.props.openLogin}>Log in</button>);
        const signupButton = (<button id="signup" onClick={this.props.openSignup}>Sign up</button>);
        if (id) {
            currentUsername = (<p>{this.props.users[id].username}</p>);
        }
        return (
            <>
            <header className="header">
                <nav className="header-nav">
                    <h1 className="header-nav-logo">minicram</h1>
                    <ul className="header-nav-list">
                        <li><a href="#"></a><i className="fa fa-search" aria-hidden="true"></i>  Search</li>
                        <li><a href="#"></a><i className="fa fa-bars" aria-hidden="true"></i>  Browse</li>
                        <li><a href="#"></a><i className="fa fa-clone" aria-hidden="true"></i>  Create</li>
                    </ul>
                </nav>
                <div className="header-buttons">
                    {currentUsername}
                    {id ? <></> : loginButton}
                    {id ? <></> : signupButton}
                </div>
            </header>   
            {this.props.ui.login ? <LoginFormContainer/> : <></>}
            {this.props.ui.signup ? <SignupFormContainer/> : <></>}
            </>
    )}


}

export default Header;