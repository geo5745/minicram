import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {  popupClass: "login-visible",
                        username: '',
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
    }

    closeForm() {
        this.setState({popupClass: "login-invisible"})
    }

    render() {
        return(
            <div className={this.state.popupClass}>
                <form onSubmit = {this.handleSubmit}>
                    <button onClick={this.closeForm}>Close</button>
                    <label htmlFor="username">Username:</label>
                        <input onChange = {this.update("username")} value = {this.state.username} id = "username" type="text"/>
                    <label htmlFor="password">Password:</label>
                        <input onChange = {this.update("password")} value = {this.state.password} id ="password" type="password"/>
                    <button>Logout</button>
                    <input type="submit"/>
                </form>
            </div>
    )}

}

export default LoginForm;