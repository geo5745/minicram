import {RECEIVE_ONE_SET, CLEAR_SET} from '../actions/api_actions';
import {merge} from 'lodash';

const initialState = {}

const setsReducer = (state = initialState,action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ONE_SET:
            return merge({}, action.set.sets);
        case CLEAR_SET:
            return initialState;
        default:
            return state;
    }
}

export default setsReducer;