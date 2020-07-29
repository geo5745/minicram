import {RECEIVE_USER,LOGOUT_USER, RECEIVE_ERRORS, CLEAR_ERRORS, CHECK_EMAIL} from '../actions/auth_actions';
import {merge} from 'lodash';

const initialState = {  username: null,
                        password: null,
                        email: null}

const errorsReducer = (state = initialState,action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USER:
            return initialState;
        case LOGOUT_USER:
            return initialState;   
        case RECEIVE_ERRORS:
            return merge({},initialState, action.errors);
        case CLEAR_ERRORS:
            return initialState;
        default:
            return state;
    }
}

export default errorsReducer;