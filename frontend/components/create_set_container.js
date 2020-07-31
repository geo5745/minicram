import CreateSet from './create_set';
import {connect} from 'react-redux';
import { openProtected, closeProtected } from '../actions/ui_actions';
import { withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({
        session: state.session
    })};

const mapDispatchToProps = (dispatch) => ({
    openProtected: () => dispatch(openProtected()),
    closeProtected: () => dispatch(closeProtected())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CreateSet));