export const fetchSet = (setId) => {
    return $.ajax({
        method: 'get', 
        url: `api/decks/${setId}` 
        })
};

export const createSet = (user) => {
    return $.ajax({
        method: 'post', 
        url: 'api/decks/',
        data: {user}
    })
};

export const deleteCard = (cardId) => {
    return $.ajax({
        method: 'delete',
        url: `api/cards/${cardId}`
    })
};