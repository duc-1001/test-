import request from "../config/axois";

const registerUser = (username, email, password) => {
    return request.post('auth/register', { username, email, password })
}

const loginUser = (email, password) => {
    return request.post('auth/login', { email, password })
}

export {
    registerUser,
    loginUser,
}