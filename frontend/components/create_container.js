import Create from './create';
import {connect} from 'react-redux';
import { openProtected, closeProtected } from '../actions/ui_actions';
import { withRouter} from 'react-router-dom';

// const mapStateToProps = (state) => {
//     return ({
//         ui: state.ui
//     })};

const mapDispatchToProps = (dispatch) => ({
    openProtected: () => dispatch(openProtected()),
    closeProtected: () => dispatch(closeProtected())
});

export default withRouter(connect(null,mapDispatchToProps)(Create));