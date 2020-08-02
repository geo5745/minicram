import * as apiUtil from '../util/api_util';

export const RECEIVE_ONE_SET = "RECEIVE_ONE_SET";
export const CLEAR_SET = "CLEAR_SET";
export const DELETE_CARD = "DELETE_CARD";
export const ADD_CARD = "ADD_CARD";
export const UPDATE_CARD = "UPDATE_CARD";
export const UPDATE_SET = "UPDATE_SET";


const receiveOneSet = (set) => {
    return {
        type: RECEIVE_ONE_SET,
        set
    }
};

const clearOutSet = () => {
    return {
        type: CLEAR_SET
    }
};

const deleteOneCard = (cardId) => {
    return {
        type: DELETE_CARD,
        cardId
    }
};

const receiveOneCard = (card) => {
    return {
        type: ADD_CARD,
        card
    }
};

const updateOneCard = (card) => {
    return {
        type: UPDATE_CARD,
        card
    }
};

const updateOneSet = (set) => {
    return {
        type: UPDATE_SET,
        set
    }
};


export const fetchSet = setId => dispatch => {
    return apiUtil.fetchSet(setId)
        .then(set => dispatch(receiveOneSet(set)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const createSet = user => dispatch => {
    return apiUtil.createSet(user)
    .then(set => dispatch(receiveOneSet(set)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const clearSet = () => dispatch => {
    return dispatch(clearOutSet())
};

export const deleteCard = (cardId) => dispatch => {
    return apiUtil.deleteCard(cardId)
    .then(card => dispatch(deleteOneCard(card.id)))
};

export const addCard = (set) => dispatch => {
    return apiUtil.addCard(set)
    .then(card => dispatch(receiveOneCard(card)))
};

export const updateCard = (card) => dispatch => {
    return apiUtil.updateCard(card)
    .then(card => dispatch(updateOneCard(card)))
};

export const updateSet = (set) => dispatch => {
    return apiUtil.updateSet(set)
    .then(set => dispatch(updateOneSet(set)))
};

window.createSet = createSet;
window.fetchSet = fetchSet;
window.clearSet = clearSet;
window.deleteCard = deleteCard;
window.addCard = addCard;
window.updateCard = updateCard;
window.updateSet = updateSet;