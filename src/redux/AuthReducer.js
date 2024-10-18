const defaultState = {
    isLoggedIn : false,
    id : undefined,
    email : undefined,
    password : undefined
}

const AuthReducer = (state = { ...defaultState }, action) => {
    if (action.type === 'logout-success') {
        return defaultState;
    }
    else if (action.type === 'login-user-success') {
        return {
            ...action.data,
            isLoggedIn: true
        };
    }
    return state;
}

export default AuthReducer