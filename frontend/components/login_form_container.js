import {connect} from 'react-redux';
import {login, logout} from '../actions/auth_actions';
import LoginForm from './login_form';

// const mapStateToProps = (state) => ({

// });

const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user)),
    logout: userId => dispatch(logout(userId))

});

export default connect(null,mapDispatchToProps)(LoginForm);