import * as apiUtil from '../util/api_util';

export const RECEIVE_ONE_SET = "RECEIVE_ONE_SET";
export const CLEAR_SET = "CLEAR_SET";
export const DELETE_CARD = "DELETE_CARD";


const receiveOneSet = (set) => {
    return {
        type: RECEIVE_ONE_SET,
        set
    }
}

const clearOutSet = () => {
    return {
        type: CLEAR_SET
    }
}

const deleteOneCard = (cardId) => {
    return {
        type: DELETE_CARD,
        cardId
    }
}


export const fetchSet = setId => dispatch => {
    return apiUtil.fetchSet(setId)
        .then(set => dispatch(receiveOneSet(set)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const createSet = user => dispatch => {
    return apiUtil.createSet(user)
    .then(set => dispatch(receiveOneSet(set)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const clearSet = () => dispatch => {
    return dispatch(clearOutSet())
};

export const deleteCard = (cardId) => dispatch => {
    return apiUtil.deleteCard(cardId)
    .then(card => dispatch(deleteOneCard(card.id)))
}

window.createSet = createSet;
window.fetchSet = fetchSet;
window.clearSet = clearSet;
window.deleteCard = deleteCard;