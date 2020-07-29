import React from 'react';
import {getAllDays,getAllMonths,getAllYears,getMonthFromString, isValidDate} from '../util/date_util'
import {isValidEmail} from '../util/auth_util'

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {  birthdate: 'Day',
                        birthmonth: 'Month',
                        birthyear: 'Year',
                        birthday: null,
                        username: '',
                        email: '',
                        password: '',
                        passwordError: 'PASSWORD',
                        birthdayError: 'BIRTHDAY',
                        emailError: 'EMAIL'
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
    }

    componentWillUnmount() {
        this.setState({
            birthdate: 'Day',
            birthmonth: 'Month',
            birthyear: 'Year',
            birthday: null,
            username: '',
            email: '',
            password: '',
            passwordError: 'PASSWORD',
            birthdayError: 'BIRTHDAY',
            emailError: 'EMAIL'
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
    

    deboucedUpdatePassword(value) {
        this.setState({password: value});
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(() => {
            if (value.length < 8) {
                this.setState({passwordError: "YOUR PASSWORD IS TOO SHORT"});
            } else {
                this.setState({passwordError: 'INVALID EMAIL ADDRESS'})
            }
        },1000)
    }

    handleDate(field, value) {
        this.setState({[field]: value});
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(() => {
            let userYear = parseInt(this.state.birthyear);
            let userMonth = getMonthFromString(this.state.birthmonth);
            let userDay = parseInt(this.state.birthdate);
            let dateValid = isValidDate(userYear,userMonth,userDay);
            //debugger
            if (this.state.birthdate === "Day" || this.state.birthmonth === "Month" || this.state.birthyear === "Year") {
                this.setState({birthdayError: "PLEASE ENTER YOUR BIRTHDAY"});
            } else if (dateValid) { 
                let userBirthday = new Date(userYear,userMonth,userDay);
                this.setState({birthday: userBirthday});
                this.setState({birthdayError: "BIRTHDAY"});
            } else {
                this.setState({birthdayError: "PLEASE ENTER A VALID DATE"});     
            }
        },1000)
    }

    handleEmail(email) {
        this.setState({email: email})
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(() => {
            if (!isValidEmail(email)) {
                this.setState({emailError: "INVALID EMAIL ADDRESS"})
            } else {
                this.setState({emailError: "EMAIL"})
                this.props.checkEmail(email);
            }

        },1000)
    }

    
    render() {
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
        if (this.state.birthdayError.length>0) {
            birthdayError = (<p>{this.state.birthdayError}</p>);
        }
        if (this.props.errors.email) {
            emailError = (<p>{this.props.errors.email}</p>);
        } else if (this.state.emailError.length >0) {
            emailError = (<p>{this.state.emailError}</p>)
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
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <select onChange={({target: {value}} ) => this.handleDate("birthmonth",value)} id="birthmonth">
                                        <option value="Month">Month</option>
                                        {monthOptions}
                                    </select>   
                                </td>
                                <td>
                                    <select onChange={({target: {value}} ) => this.handleDate("birthdate",value)} id="birthdate">
                                        <option value="Day">Day</option>
                                        {dayOptions}
                                    </select>
                                </td>
                                <td>
                                    <select onChange={({target: {value}} ) => this.handleDate("birthyear",value)} id="birthyear">
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
                    <input onChange = {({target: {value}} ) => this.handleEmail(value)} value = {this.state.email} id = "email" type="email"/>
                    {passwordError} 
                    <input onChange = {({target: {value}} ) => this.deboucedUpdatePassword(value) } value={this.state.password} id ="password" type="password"/>
                    <input type="submit"/>
                </form>
                </div>
            </div>
    )}

}

export default SignupForm;