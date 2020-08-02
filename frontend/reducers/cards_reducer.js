import {RECEIVE_ONE_SET, CLEAR_SET, DELETE_CARD} from '../actions/api_actions';
import {merge} from 'lodash';

const initialState = {}

const cardsReducer = (state = initialState,action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ONE_SET:
            //return action.set.sets;
            return merge({},action.set.cards);
        case CLEAR_SET:
            return initialState;
        case DELETE_CARD:
            let newState = merge({},state);
            delete newState[action.cardId];
            return newState;
        default:
            return state;
    }
}

export default cardsReducer;