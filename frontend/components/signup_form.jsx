import React from 'react';
import {getAllDays,getAllMonths,getAllYears,getMonthFromString, isValidDate, findAge} from '../util/date_util'
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
                        emailError: 'EMAIL',
                        usernameError: 'USERNAME',
                        userAge: 100
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
        const userObject = {
            birthday: this.state.birthday,
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
            emailError: 'EMAIL',
            usernameError: 'USERNAME',
            userAge: 100
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
                let currentAge = findAge(userBirthday);
                this.setState({userAge: currentAge});
                this.setState({birthdayError: "BIRTHDAY"});
                if (currentAge < 13) this.setState({emailError: "PARENT'S EMAIL"});
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
                this.setState({emailError: "INVALID EMAIL ADDRESS"});
            } else if (this.state.userAge < 13) {
                this.setState({emailError: "PARENT'S EMAIL"});
                this.props.checkEmail(email);
            } else {
                this.setState({emailError: "EMAIL"});
                this.props.checkEmail(email);
            }

        },1000)
    }

    handleUsername(username) {
        this.setState({username: username})
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(() => {
            if (username.length < 3) {
                this.setState({usernameError: "YOUR USERNAME IS TOO SHORT. THE MINIMUM LENGTH IS 3 CHARACTERS."});
            } else if (username.length > 20) {
                this.setState({usernameError: "YOUR USERNAME IS TOO LONG. THE MAXIMUM LENGTH IS 20 CHARACTERS."});
            } else {
                this.setState({usernameError: "USERNAME"});
                this.props.checkUsername(username);
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
        } else if (this.state.usernameError.length > 0) {
            usernameError = (<p>{this.state.usernameError}</p>)
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
                    {this.props.ui.protected ? <p>Sign up for free to create study sets</p> : <button onClick={this.closeForm}>Close</button>}
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
                    <input onChange = {({target: {value}} ) => this.handleUsername(value)} value = {this.state.username} id = "username" type="text"/>
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