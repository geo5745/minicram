import {RECEIVE_USER,LOGOUT_USER} from '../actions/auth_actions';
import {merge} from 'lodash';

const usersReducer = (state = {},action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            //return merge({}, state, {[action.user.id] : action.user});
            return merge({}, {[action.user.id] : action.user});
        default:
            return state;
    }
}

export default usersReducer;