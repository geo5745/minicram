import * as authUtil from '../util/auth_ajax';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

const logoutUser = (userId) => {
    return {
        type: LOGOUT_USER,
        userId
    }
}


export const login = user => dispatch => {
    return authUtil.login(user)
        .then(user => dispatch(receiveUser(user)))
};

export const logout = userId => dispatch => {
    return authUtil.logout(userId)
        .then(user => dispatch(logoutUser(user)))
};
