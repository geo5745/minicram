import {connect} from 'react-redux';
import {login, logout, clearAllErrors} from '../actions/auth_actions';
import {closeLogin} from '../actions/ui_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => ({
    errors: state.errors,
    session: state.session
});

const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout()),
    closeLogin: () => dispatch(closeLogin()),
    clearAllErrors: () => dispatch(clearAllErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);