import React from 'react';
import {getAllDays,getAllMonths,getAllYears,getMonthFromString} from '../util/date_util'
import {debounce} from 'lodash';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {  birthdate: '',
                        birthmonth: '',
                        birthyear: '',
                        username: '',
                        email: '',
                        password: '',
                        passwordError: ''
                    }
        this.closeForm = this.closeForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.timerId = null;
    }

    update(field) {
        return e => {
            this.setState({[field] : e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let userYear = parseInt(this.state.birthyear);
        let userMonth = getMonthFromString(this.state.birthmonth);
        let userDay = parseInt(this.state.birthdate);
        const userBirthday = new Date(userYear,userMonth,userDay);
        const userObject = {
            birthday: userBirthday,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,

        }
        this.props.signup(userObject);
        //this.closeForm();
    }

    componentWillUnmount() {
        this.setState({
            birthdate: '',
            birthmonth: '',
            birthyear: '',
            username: '',
            email: '',
            password: ''
        });
        this.props.clearAllErrors();
    }

    componentDidUpdate() {
        if (this.props.session.id) {
            this.closeForm();
        }
    }

    closeForm() {
        this.props.closeSignup();
        
    }

    

    

    handleUpdate() {
        return value => {
            this.setState({"password" : value});
            console.log(this.state.password);
        }
    }

    debouncedUpdate() {
        debounce(value => handleUpdate(value), 500);
    }

    deboucedUpdatePassword(value) {
        this.setState({password: value});
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(() => {
            if (value.length < 8) {
                this.setState({passwordError: "YOUR PASSWORD IS TOO SHORT"});
            } else {
                this.setState({passwordError: ''})
            }
        },500)
        

            // e.persist();    
            // this.setState({"password" : e.target.value});
            // debounce(this.passwordCheck,500);
            // console.log(this.state.password);
    }

    

    render() {
        //debugger
        let birthdayError = (<p></p>);
        let usernameError = (<p></p>);
        let emailError = (<p></p>);
        let passwordError = (<p></p>);
        if (this.props.errors.username) {
            usernameError = (<p>{this.props.errors.username}</p>);
        }
        if (this.state.passwordError.length > 0) {
            passwordError = (<p>{this.state.passwordError}</p>);
        }

        const allDays = getAllDays();
        const dayOptions = allDays.map(day => <option key={`yyyymm${day}`} value={day}>{day}</option>);

        const allMonths = getAllMonths();
        const monthOptions = allMonths.map(month => <option key={`yyyy${month}dd`} value={month}>{month}</option>);

        const allYears = getAllYears();
        const yearOptions = allYears.map(year => <option key={`${year}mmdd`} value={year}>{year}</option>);

        return(
            <div className="login-visible">
                <div className = "form-container">
                    <button onClick={this.closeForm}>Close</button>
                    <h1>Sign Up</h1>
                    <form onSubmit = {this.handleSubmit}>
                        {birthdayError}
                        <label>Birthday:</label>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <select onChange={this.update("birthdate")} value={this.state.birthdate} id="birthdate">
                                        <option value="Day">Day</option>
                                        {dayOptions}
                                    </select>
                                </td>
                                <td>
                                    <select onChange={this.update("birthmonth")} value={this.state.birthmonth} id="birthmonth">
                                        <option value="Month">Month</option>
                                        {monthOptions}
                                    </select>   
                                </td>
                                <td>
                                    <select onChange={this.update("birthyear")} value={this.state.birthyear} id="birthyear">
                                        <option value="Year">Year</option>
                                        {yearOptions}
                                    </select>  
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    {usernameError}
                    <label htmlFor="username">Username:</label>
                    <input onChange = {this.update("username")} value = {this.state.username} id = "username" type="text"/>
                    {emailError}
                    <label htmlFor="email">Email:</label>
                    <input onChange = {this.update("email")} value = {this.state.email} id = "email" type="email"/>
                    {passwordError}
                    <label htmlFor="password">Password:</label>
                    <input onChange = {({target: {value}} ) => this.deboucedUpdatePassword(value) } value={this.state.password} id ="password" type="password"/>
                    <input type="submit"/>
                </form>
                </div>
            </div>
    )}

}

export default SignupForm;