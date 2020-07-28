import {LOGIN_OPEN,LOGIN_CLOSE, SIGNUP_OPEN, SIGNUP_CLOSE} from '../actions/ui_actions';
import {merge} from 'lodash';

const initialState = {  login: false,
                        signup: false}

const uiReducer = (state = initialState,action) => {
    Object.freeze(state);
    switch(action.type) {
        case LOGIN_OPEN:
            return merge({},state,{login: true, signup: false})
        case LOGIN_CLOSE:
            return merge({},state,{login: false})
        case SIGNUP_OPEN:
            return merge({},state,{login: false, signup: true})
        case SIGNUP_CLOSE:
            return merge({},state,{signup: false})
        default:
            return state;
    }
}

export default uiReducer;