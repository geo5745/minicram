import {connect} from 'react-redux';
import {signup, clearAllErrors, checkEmail} from '../actions/auth_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => ({
    errors: state.errors,
    session: state.session
});

const mapDispatchToProps = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    closeSignup: () => dispatch(closeSignup()),
    clearAllErrors: () => dispatch(clearAllErrors()),
    checkEmail: email => dispatch(checkEmail(email))

});

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);