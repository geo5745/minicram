export const login = (user) => {
    return $.ajax({
        method: 'post', 
        url: 'api/session', 
        data: {user} })
} 

export const logout = (userId) => {
    return $.ajax({
        method: 'delete', 
        url: 'api/session', 
        data: {userId} })
} 