import {RECEIVE_USER,LOGOUT_USER} from '../actions/auth_actions';
import {merge} from 'lodash';

const usersReducer = (state = {},action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:

        case LOGOUT_USER:
        default:
            return state;
    }
}

export default usersReducer;