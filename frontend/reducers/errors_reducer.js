import {RECEIVE_USER,LOGOUT_USER, RECEIVE_ERRORS} from '../actions/auth_actions';
import {merge} from 'lodash';

const initialState = {  username: null,
                        password: null}

const errorsReducer = (state = initialState,action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USER:
            return initialState;
        case LOGOUT_USER:
            return initialState;   
        case RECEIVE_ERRORS:
            return merge({},initialState, action.errors);
        default:
            return state;
    }
}

export default errorsReducer;