import {RECEIVE_USER,LOGOUT_USER} from '../actions/auth_actions';

const initialState = {id: null}

const sessionReducer = (state = initialState,action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USER:
            return {id: action.user.id};
        case LOGOUT_USER:
            return {id: null};
        default:
            return state;
    }
}

export default sessionReducer;