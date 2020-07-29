import {connect} from 'react-redux';
import {signup} from '../actions/auth_actions';
import {closeLogin} from '../actions/ui_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => ({
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    closeSignup: () => dispatch(closeSignup())
});

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);