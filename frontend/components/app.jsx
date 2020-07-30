import React from 'react';
import HeaderContainer from './header_container';
import Browse from './browse';
import CreateContainer from './create_container';
import Splash from './splash';
import { Route } from 'react-router-dom';


const App = () => (
    <>
        <HeaderContainer/>
        <Route exact path="/" component={Splash} />
        <Route path="/browse" component={Browse} />
        <Route path="/create" component={CreateContainer} />
    </>
);

export default App;