export const LOGIN_OPEN = "LOGIN_OPEN";
export const LOGIN_CLOSE = "LOGIN_CLOSE";
export const SIGNUP_OPEN = "SIGNUP_OPEN";
export const SIGNUP_CLOSE = "SIGNUP_CLOSE";
export const PROTECTED_OPEN = "PROTECTED_OPEN";
export const PROTECTED_CLOSE = "PROTECTED_CLOSE"

const loginOpen = () => {
    return {
        type: LOGIN_OPEN
    }
}

const loginClose = () => {
    return {
        type: LOGIN_CLOSE
    }
}

const signupOpen = () => {
    return {
        type: SIGNUP_OPEN
    }
}

const signupClose = () => {
    return {
        type: SIGNUP_CLOSE
    }
}

const protectedOpen = () => {
    return {
        type: PROTECTED_OPEN
    }
}

const protectedClose = () => {
    return {
        type: PROTECTED_CLOSE
    }
}

export const openLogin = () => dispatch => {
    return dispatch(loginOpen())
};

export const closeLogin = () => dispatch => {
    return dispatch(loginClose())
};

export const openSignup = () => dispatch => {
    return dispatch(signupOpen())
};

export const closeSignup = () => dispatch => {
    return dispatch(signupClose())
};

export const openProtected = () => dispatch => {
    return dispatch(protectedOpen())
};

export const closeProtected = () => dispatch => {
    return dispatch(protectedClose())
};



window.openLogin = openLogin;
window.closeLogin = closeLogin;
window.openSignup = openSignup;
window.closeSignup = closeSignup;
window.openProtected = openProtected;
window.closeProtected = closeProtected;

