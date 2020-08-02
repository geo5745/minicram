import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import cardsReducer from './cards_reducer';
import setsReducer from './sets_reducer';

export default combineReducers({
    sets: setsReducer,
    cards: cardsReducer,
    users: usersReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer
});

