import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {  username: '',
                        password: ''
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
        this.closeForm();
    }

    componentWillUnmount() {
        this.setState({
            username: '',
            password: ''
        })

    }

    closeForm() {
        this.props.closeLogin();
    }

    render() {
        let usernameError = (<p></p>);
        let passwordError = (<p></p>);
        if (this.props.errors.username) {
            usernameError = (<p>{this.props.errors.username}</p>);
        }
        if (this.props.errors.password) {
            passwordError = (<p>{this.props.errors.password}</p>);
        }
        return(
            <div className="login-visible">
                <div className = "form-container">
                    <button onClick={this.closeForm}>Close</button>
                    <h1>Log in</h1>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor="username">Username:</label>
                        <input onChange = {this.update("username")} value = {this.state.username} id = "username" type="text"/>
                        {usernameError}
                    <label htmlFor="password">Password:</label>
                        <input onChange = {this.update("password")} value = {this.state.password} id ="password" type="password"/>
                        {passwordError}
                    <input type="submit"/>
                </form>
                </div>
            </div>
    )}

}

export default LoginForm;