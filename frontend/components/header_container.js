import {connect} from 'react-redux';
import {openLogin, closeLogin, openSignup, closeSignup} from '../actions/ui_actions';
import {logout} from '../actions/auth_actions'
import Header from './header';

const mapStateToProps = (state) => ({
    ui: state.ui,
    session: state.session,
    users: state.users
});

const mapDispatchToProps = (dispatch) => ({
    openLogin: () => dispatch(openLogin()),
    closeLogin: () => dispatch(closeLogin()),
    openSignup: () => dispatch(openSignup()),
    closeSignup: () => dispatch(closeSignup()),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);