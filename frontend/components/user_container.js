import User from './user';
import {connect} from 'react-redux';
import {fetchSetCollection} from '../actions/api_actions';
import { withRouter} from 'react-router-dom';

const mapStateToProps = (state) => ({
        session: state.session,
        user: Object.values(state.users)[0],
        sets: Object.values(state.sets)
    })

const mapDispatchToProps = (dispatch) => ({
    fetchSetCollection: (user) => dispatch(fetchSetCollection(user))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(User));