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
            sendToUser: false,
            searchBar: false
        }



        this.handleLogout = this.handleLogout.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    componentDidMount() {

    }

    handleLogout () {
        this.props.logout();
        //this.setState({goodbye: true})
    }

    openSearchBar() {
        this.setState({searchBar: true});
    }

    closeSearchBar() {
        this.setState({searchBar: false});
    }

    loginDemo () {
        this.props.login(demo);
        this.setState({sendToUser: true});
    }

    render() {
        //const { goodbye } = this.state;

        let {id} = this.props.session;
        let currentUsername = '';
        const loginButton = (<button onClick={this.props.openLogin}>Log in</button>);
        const demoButton = (<button id="demo" onClick={this.loginDemo}>Demo Log in</button>)
        const signupButton = (<button  id="signup" onClick={this.props.openSignup}>Sign up</button>);
        //const logoutButton = (<button id="logout" onClick={this.handleLogout}>Log out</button>);
        const logoutButton = (<Link className ="goldbutton" onClick={this.handleLogout} to="/goodbye">Log out</Link>);

        const searchBarOpen = (
            <div className = "search-bar">
                <div className="search-fa-container"></div>
                <div className="search-input-container">
                    <input placeholder="Don't search..." className = "search-bar-input" type="text"/>
                </div>
                <div className="exit-search-button">
                    <button onClick={()=>this.closeSearchBar()}>X</button>
                </div>
            </div>
        )

        const headerNavList = (
                    <ul className="header-nav-list">
                        <li><Link onClick={()=>this.openSearchBar()}><i className="fa fa-search" aria-hidden="true"></i>  Search</Link></li>
                        <li><a className="inactive" ><i className="fa fa-bars" aria-hidden="true"></i>  Browse</a></li>
                        <li><Link to="/create"><i className="fa fa-clone" aria-hidden="true"></i>  Create</Link></li>
                    </ul>)
        
        if (id) {
            currentUsername = (<Link to={`/user/${this.props.session.id}`}>{this.props.users[id].username}</Link>);
        }   

        return (
            <>
            <header className="header">
                <nav className="header-nav">
                    <h1 className="header-nav-logo">minicram</h1>
                    {this.state.searchBar ? searchBarOpen : headerNavList}
                    {/* <ul className="header-nav-list">
                        <li><Link to="/"><i className="fa fa-search" aria-hidden="true"></i>  Search</Link></li>
                        <li><a className="inactive" ><i className="fa fa-bars" aria-hidden="true"></i>  Browse</a></li>
                        <li><Link to="/create"><i className="fa fa-clone" aria-hidden="true"></i>  Create</Link></li>
                    </ul> */}
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
            {this.state.sendToUser ? <Redirect to={`/user/${this.props.session.id}`}/> : <></>}
            </>
    )}

}

export default Header;