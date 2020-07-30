import {LOGIN_OPEN,LOGIN_CLOSE, SIGNUP_OPEN, SIGNUP_CLOSE, PROTECTED_CLOSE, PROTECTED_OPEN} from '../actions/ui_actions';
import {merge} from 'lodash';

const initialState = {  login: false,
                        signup: false,
                        protected: false}

const uiReducer = (state = initialState,action) => {
    Object.freeze(state);
    switch(action.type) {
        case LOGIN_OPEN:
            return merge({},state,{login: true, signup: false, protected: false})
        case LOGIN_CLOSE:
            return merge({},state,{login: false})
        case SIGNUP_OPEN:
            return merge({},state,{login: false, signup: true, protected: false})
        case SIGNUP_CLOSE:
            return merge({},state,{signup: false})
        case PROTECTED_OPEN:
            return merge({},state,{login: false, signup: false, protected: true})
        case PROTECTED_CLOSE:
            return merge({},state,{protected: false})
        default:
            return state;
    }
}

export default uiReducer;