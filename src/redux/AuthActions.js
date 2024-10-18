export const logoutSuccess = () => {
    return {
        type : 'logout-success'
    };
}

export const loginUserSuccess = (loginData) => {
    return {
        type : 'login-user-success',
        data : loginData

    }
}

export const loginUserHandler = (creds, password) => {
    return async function(dispatch) {

        const loginState = {
            id : creds.id,
            email : creds.email,
            password
        }     
        dispatch(loginUserSuccess(loginState));

        return response;
    }
}