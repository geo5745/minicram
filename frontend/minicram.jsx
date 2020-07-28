import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

// testing
import {logout} from './actions/auth_actions';
import {openLogin, closeLogin, openSignup, closeSignup} from './actions/ui_actions';


document.addEventListener("DOMContentLoaded",()=>{
    const store = configureStore();

    //testing
    window.store = store;

    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store}/>,root)

});