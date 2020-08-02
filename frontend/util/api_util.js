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

export const addCard = (set) => {
    return $.ajax({
        method: 'post',
        url: 'api/cards/',
        data: {set}
    })
};

export const updateCard = (card) => {
    return $.ajax({
        method: 'patch',
        url: `/api/cards/${card.id}`,
        data: {card}
    })
};

export const updateSet = (set) => {
    return $.ajax({
        method: 'patch',
        url: `/api/decks/${set.id}`,
        data: {set}
    })
};