import React from 'react';
import HeaderContainer from './header_container';
import Browse from './browse';
import CreateSetContainer from './create_set_container';
import EditSetContainer from './edit_set_container';
import Splash from './splash';
import { Route, Redirect } from 'react-router-dom';
import Goodbye from './goodbye';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserContainer from './user_container';
import FlashcardModeContainer from './flashcard_mode_container';


const App = () => (
    <>
        <HeaderContainer/>
        <Route exact path="/" component={Splash} />
        <Route path="/browse" component={Browse} />
        <Route path="/create" component={CreateSetContainer} />
        <ProtectedRoute path="/user/:userId" component={UserContainer} />
        <ProtectedRoute path="/set/:setId/edit" component={EditSetContainer}/>
        <Route exact path="/goodbye" component={Goodbye}/>
        <Route path="/set/:setId/flashcards" component={FlashcardModeContainer}/>
    </>
);

export default App;