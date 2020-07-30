import {connect} from 'react-redux';
import {signup, clearAllErrors, checkEmail, checkUsername} from '../actions/auth_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => ({
    errors: state.errors,
    session: state.session,
    ui: state.ui
});

const mapDispatchToProps = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    closeSignup: () => dispatch(closeSignup()),
    clearAllErrors: () => dispatch(clearAllErrors()),
    checkEmail: email => dispatch(checkEmail(email)),
    checkUsername: username => dispatch(checkUsername(username)),
    openLogin: () => dispatch(openLogin())

});

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);