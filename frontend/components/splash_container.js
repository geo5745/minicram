import Splash from './splash';
import {connect} from 'react-redux';
import {openSignup} from '../actions/ui_actions';
import { withRouter} from 'react-router-dom';



const mapDispatchToProps = (dispatch) => ({
    openSignup: () => dispatch(openSignup())
});

export default withRouter(connect(null,mapDispatchToProps)(Splash));