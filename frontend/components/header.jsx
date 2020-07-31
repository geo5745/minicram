import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import ProtectedFormContainer from './protected_form_container';
import { demo } from '../actions/auth_actions';
import { Link, Redirect } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            goodbye: false
        }



        this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount() {

    }

    handleLogout () {
        this.props.logout();
        this.setState({goodbye: true})
    }

    render() {
        const { goodbye } = this.state;

        let {id} = this.props.session;
        let currentUsername = '';
        const loginButton = (<button onClick={this.props.openLogin}>Log in</button>);
        const demoButton = (<button id="logout" onClick={() => this.props.login(demo)}>Demo Log in</button>)
        const signupButton = (<button id="signup" onClick={this.props.openSignup}>Sign up</button>);
        const logoutButton = (<button id="logout" onClick={this.handleLogout}>Log out</button>);
        
        if (id) {
            currentUsername = (<p>{this.props.users[id].username}</p>);
        }   

        return (
            <>
            <header className="header">
                <nav className="header-nav">
                    <h1 className="header-nav-logo">minicram</h1>
                    <ul className="header-nav-list">
                        <li><Link to="/"><i className="fa fa-search" aria-hidden="true"></i>  Search</Link></li>
                        <li><Link to="/browse"><i className="fa fa-bars" aria-hidden="true"></i>  Browse</Link></li>
                        <li><Link to="/create"><i className="fa fa-clone" aria-hidden="true"></i>  Create</Link></li>
                    </ul>
                </nav>
                <div className="header-buttons">
                    {currentUsername}
                    {id ? logoutButton : <></>}
                    {id ? <></> : loginButton}
                    {id ? <></> : demoButton}
                    {id ? <></> : signupButton}
                </div>
            </header>   
            {this.props.ui.login ? <LoginFormContainer/> : <></>}
            {this.props.ui.signup ? <SignupFormContainer/> : <></>}
            {this.props.ui.protected ? <ProtectedFormContainer/> : <></>}
            {goodbye ? <Redirect to='/goodbye'/> : <></>}
            </>
    )}


}

export default Header;