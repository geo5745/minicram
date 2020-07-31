import React from 'react';
import HeaderContainer from './header_container';
import Browse from './browse';
import CreateSetContainer from './create_set_container';
import Splash from './splash';
import { Route, Redirect } from 'react-router-dom';
import Goodbye from './goodbye';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import User from './user';


const App = () => (
    <>
        <HeaderContainer/>
        <Route exact path="/" component={Splash} />
        <Route path="/browse" component={Browse} />
        <Route path="/create" component={CreateSetContainer} />
        <ProtectedRoute path="/user/:userId" component={User} />
        <Route exact path="/goodbye" component={Goodbye}/>
    </>
);

export default App;