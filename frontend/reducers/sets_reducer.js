import {RECEIVE_ONE_SET, CLEAR_SET, UPDATE_SET, RECEIVE_MANY_SETS} from '../actions/api_actions';
import {merge} from 'lodash';

const initialState = {}

const setsReducer = (state = initialState,action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ONE_SET:
            return merge({}, action.set.sets);
        case UPDATE_SET:
            return merge({}, action.set.sets);
        case RECEIVE_MANY_SETS:
            return merge({}, action.sets.sets);
        case CLEAR_SET:
            return initialState;
        default:
            return state;
    }
}

export default setsReducer;