export const login = (user) => {
    return $.ajax({
        method: 'post', 
        url: 'api/session', 
        data: {user} })
};

export const logout = (userId) => {
    return $.ajax({
        method: 'delete', 
        url: 'api/session', 
        data: {userId} })
};

export const signup = (user) => {
    return $.ajax({
        method: 'post',
        url: 'api/users',
        data: {user}
    })
};

export const isValidEmail = (email) => {
    if (!email.includes("@")) return false;
    let atIndex = email.indexOf("@");
    let before = email.slice(0,atIndex);
    let after = email.slice(atIndex+1);
    if (before.length === 0) return false;
    if (!after.includes(".")) return false;
    if (after[0] === ".") return false;
    if (after.slice(-1) === ".") return false;
    return true;
}

export const checkEmail = (email) => {
    return $.ajax({method: 'get',
            url: '/email/',
            data: {email}
        })
    };


