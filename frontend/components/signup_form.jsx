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
                        userAge: 100,
                        birthdayBorderId: '',
                        birthdayErrorId: '',
                        usernameErrorId: '',
                        emailErrorId: '',
                        passwordErrorId: '',
                        usernameBorderId: '',
                        emailBorderId: '',
                        passwordBorderId: '',
                        buttonDisabled: 'disabled'
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
            userAge: 100,
            birthdayBorderId: '',
            birthdayErrorId: '',
            usernameErrorId: '',
            emailErrorId: '',
            passwordErrorId: '',
            usernameBorderId: '',
            emailBorderId: '',
            passwordBorderId: '',
            buttonDisabled: 'disabled',
        });
        this.props.clearAllErrors();
    }

    componentDidUpdate(prevProps) {
        if (this.props.errors.email && prevProps.errors.email !== this.props.errors.email) {
            this.setState({emailError: this.props.errors.email});
            this.setState({emailErrorId: 'error-text'});
            this.setState({emailBorderId: 'error-border'});
        }
        if (this.props.errors.username && prevProps.errors.username !== this.props.errors.username) {
            this.setState({usernameError: this.props.errors.username});;
            this.setState({usernameErrorId: 'error-text'});
            this.setState({usernameBorderId: 'error-border'});
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
                this.setState({passwordErrorId: "error-text"});
                this.setState({passwordBorderId: "error-border"});

            } else {
                this.setState({passwordError: 'PASSWORD'});
                this.setState({passwordErrorId: ""});
                this.setState({passwordBorderId: "approved-border"});
            }
        },500)
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
            if (this.state.birthdate === "Day" || this.state.birthmonth === "Month" || this.state.birthyear === "Year") {
                this.setState({birthdayError: "PLEASE ENTER YOUR BIRTHDAY"});
                this.setState({birthdayBorderId: "error-border"});
                this.setState({birthdayErrorId: "error-text"});
            } else if (!dateValid) { 
                this.setState({birthdayError: "PLEASE ENTER A VALID DATE"});
                this.setState({birthdayBorderId: "error-border"});
                this.setState({birthdayErrorId: "error-text"}); 
            }  else  {
                let userBirthday = new Date(userYear,userMonth,userDay);
                this.setState({birthday: userBirthday});
                let currentAge = findAge(userBirthday);
                this.setState({userAge: currentAge});
                this.setState({birthdayError: "BIRTHDAY"});
                this.setState({birthdayBorderId: "approved-border"});
                this.setState({birthdayErrorId: ""});
                if (currentAge < 13) {
                    this.setState({emailError: "PARENT'S EMAIL"});
                    this.setState({emailErrorId: ''});
                    this.setState({emailBorderId: ''});
                } else {
                    this.setState({emailError: "EMAIL"});
                    this.setState({emailErrorId: ''});
                    this.setState({emailBorderId: ''});
                }
            }
        },1500)
    }

    handleEmail(email) {
        this.setState({email: email})
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(() => {
            this.props.checkEmail(email.toLowerCase());
            if (!isValidEmail(email)) {
                this.setState({emailError: "INVALID EMAIL ADDRESS"});
                this.setState({emailErrorId: 'error-text'});
                this.setState({emailBorderId: 'error-border'});
            } else if (this.state.userAge < 13) {
                this.setState({emailError: "PARENT'S EMAIL"});
                this.setState({emailErrorId: ''});
                this.setState({emailBorderId: 'approved-border'});
            } else {
                this.setState({emailError: "EMAIL"});
                this.setState({emailErrorId: ''});
                this.setState({emailBorderId: 'approved-border'});
            }

        },500)
    }

    handleUsername(username) {
        this.setState({username: username})
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(() => {
            let usernameToBeChecked = username.toLowerCase();
            this.props.checkUsername(usernameToBeChecked);
            if (username.length < 3) {
                this.setState({usernameError: "YOUR USERNAME IS TOO SHORT. THE MINIMUM LENGTH IS 3 CHARACTERS."});
                this.setState({usernameErrorId: 'error-text'});
                this.setState({usernameBorderId: 'error-border'});
            } else if (username.length > 20) {
                this.setState({usernameError: "YOUR USERNAME IS TOO LONG. THE MAXIMUM LENGTH IS 20 CHARACTERS."});
                this.setState({usernameErrorId: 'error-text'});
                this.setState({usernameBorderId: 'error-border'});
            } else {
                this.setState({usernameError: "USERNAME"});
                this.setState({usernameErrorId: ''});
                this.setState({usernameBorderId: 'approved-border'});
            }   
        },500)
    }

    
    render() {
        
        let birthdayMessage = (<p></p>);
        let usernameMessage = (<p id = {this.state.usernameErrorId}>{this.state.usernameError}</p>);
        let emailMessage = (<p id = {this.state.emailErrorId}>{this.state.emailError}</p>);
        let passwordMessage = (<p></p>);

        if (this.state.passwordError.length > 0) {
            passwordMessage = (<p id={this.state.passwordErrorId}>{this.state.passwordError}</p>);
        }

        if (this.state.birthdayError.length>0) {
            birthdayMessage = (<p id={this.state.birthdayErrorId}>{this.state.birthdayError}</p>);
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
                        {birthdayMessage}
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <select onChange={({target: {value}} ) => this.handleDate("birthmonth",value)} id={this.state.birthdayBorderId}>
                                        <option value="Month">Month</option>
                                        {monthOptions}
                                    </select>   
                                </td>
                                <td>
                                    <select onChange={({target: {value}} ) => this.handleDate("birthdate",value)} id={this.state.birthdayBorderId}>
                                        <option value="Day">Day</option>
                                        {dayOptions}
                                    </select>
                                </td>
                                <td>
                                    <select onChange={({target: {value}} ) => this.handleDate("birthyear",value)} id={this.state.birthdayBorderId}>
                                        <option value="Year">Year</option>
                                        {yearOptions}
                                    </select>  
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    {usernameMessage}
                    <input onChange = {({target: {value}} ) => this.handleUsername(value)} value = {this.state.username} id = {this.state.usernameBorderId} placeholder= "andrew123" type="text"/>
                    {emailMessage}
                    <input onChange = {({target: {value}} ) => this.handleEmail(value)} value = {this.state.email} id = {this.state.emailBorderId} placeholder="user@minicram.com" type="email"/>
                    {passwordMessage} 
                    <input onChange = {({target: {value}} ) => this.deboucedUpdatePassword(value) } value={this.state.password} id ={this.state.passwordBorderId} placeholder="********" type="password"/>
                    <button>Sign up</button>
                </form>
                </div>
            </div>
    )}

}

export default SignupForm;