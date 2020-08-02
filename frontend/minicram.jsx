import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

// testing
import {logout, checkEmail, checkUsername} from './actions/auth_actions';
import {openLogin, closeLogin, openSignup, closeSignup, openProtected, closeProtected} from './actions/ui_actions';
import {fetchSet,clearSet,createSet, deleteCard} from './actions/api_actions';



document.addEventListener("DOMContentLoaded",()=>{
    let store;
    if (window.currentUser) {
        const preloadedState = {
            users: { [window.currentUser.id]: window.currentUser },
            session: { id: window.currentUser.id }
        };
    store = configureStore(preloadedState);
    delete window.currentUser;
    } else {
        store = configureStore();
    }
    //testing
    window.store = store;

    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store}/>,root)

});