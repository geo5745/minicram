import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {  username: '',
                        password: '',
                        usernameError: 'USERNAME',
                        passwordError: 'PASSWORD',
                        usernameBorderClass: '',
                        usernameTextClass: '',
                        passwordBorderClass: '',
                        passwordTextClass: ''
                    }
        this.closeForm = this.closeForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

    update(field) {
        return e => {
            this.setState({[field] : e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const userObject = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(userObject);
        //this.closeForm();
    }

    componentWillUnmount() {
        this.setState({
            username: '',
            password: '',
            usernameError: 'USERNAME',
            passwordError: 'PASSWORD',
            usernameBorderClass: '',
            usernameTextClass: '',
            passwordBorderClass: '',
            passwordTextClass: ''
        });
        this.props.clearAllErrors();
    }

    componentDidUpdate(prevProps) {
        if (this.props.session.id) {
            this.closeForm();
        }
        if (this.props.errors.username && prevProps.errors.username !== this.props.errors.username) {
            this.setState({usernameError: this.props.errors.username});
            this.setState({usernameTextClass: "red-text"})
            this.setState({usernameBorderClass: "red-border"})
        }
        if (this.props.errors.password && prevProps.errors.password !== this.props.errors.password) {
            this.setState({passwordError: this.props.errors.password});
            this.setState({passwordTextClass: "red-text"})
            this.setState({passwordBorderClass: "red-border"})
        }

    }

    closeForm() {
        this.props.closeLogin();
    }

    render() {
        let usernameMessage = (<p id = {this.state.usernameTextClass}>{this.state.usernameError}</p>);
        let passwordMessage = (<p id = {this.state.passwordTextClass}>{this.state.passwordError}</p>);
        
        return(
            <div className="login-visible">
                <div className = "login-form">
                    <div className="login-top">
                        <h1>Log in</h1>
                        <button onClick={this.closeForm}>X</button>
                    </div>
                    <form onSubmit = {this.handleSubmit}>
                        <input onChange = {this.update("username")} value = {this.state.username} id = {this.state.usernameBorderClass} placeholder="Type your username"  type="text"/>
                        {usernameMessage}
                        <input onChange = {this.update("password")} value = {this.state.password} id = {this.state.passwordBorderClass} placeholder="Type your password"  type="password"/>
                        {passwordMessage}
                        <div id = "high"></div>
                        <button>Log in</button>
                    </form>
                </div>
            </div>
    )}

}

export default LoginForm;