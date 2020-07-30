import React from 'react';
import {connect} from 'react-redux';
import { Redirect, Route, withRouter} from 'react-router-dom';
import { openProtected } from '../actions/ui_actions';


const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
  
const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

const mapDispatchToProps = dispatch => ({
    openProtected: () => dispatch(openProtected())
});
  
export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);