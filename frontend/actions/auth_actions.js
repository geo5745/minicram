import * as authUtil from '../util/auth_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

export const receiveErrors = (errors = {}) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
};

export const demo = {username: "demo", password: "demodemo"};


export const login = user => dispatch => {
    return authUtil.login(user)
        .then(user => dispatch(receiveUser(user)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const logout = () => dispatch => {
    return authUtil.logout()
        .then(() => dispatch(logoutUser()))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const signup = user => dispatch => {
    return authUtil.signup(user)
        .then(user => dispatch(receiveUser(user)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const clearAllErrors = () => dispatch => {
    return dispatch(clearErrors())
};

export const checkEmail = (email) => dispatch => {
    return authUtil.checkEmail(email)
        .then(errors => dispatch(receiveErrors(errors)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const checkUsername = (username) => dispatch => {
    return authUtil.checkUsername(username)
        .then(errors => dispatch(receiveErrors(errors)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

window.logout = logout;
window.checkEmail = checkEmail;
window.checkUsername = checkUsername;
