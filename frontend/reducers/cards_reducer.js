import {RECEIVE_ONE_SET, CLEAR_SET, DELETE_CARD, ADD_CARD, UPDATE_CARD} from '../actions/api_actions';
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
        case ADD_CARD:
            let newCard = {[action.card.id]: action.card};
            return merge({},state,newCard);
        case UPDATE_CARD:
            let nextState = merge({},state);
            nextState[action.card.id] = action.card;
            return nextState;
        default:
            return state;
    }
}

export default cardsReducer;