import axios from "axios";

// Eger Android emulator kullaniyorsaniz, emulatorun bilgisayarinizdaki localhost adresine erisebilmesi icin ozel bir IP adresi olan 10.0.2.2'yi kullanabilirsiniz
const API_BASE_URL = "http://10.0.2.2:9001/api/v1";

export const signUp = (body) => {
    return axios.post(`${API_BASE_URL}/users/signup`, body);
}

export const login = (email, password) => {
    return axios.get(`${API_BASE_URL}/users/login/${email}?password=${password}`);
}

export const setAuthorizationHeader = (userData) => {
    if(userData.isLoggedIn) {
        const { email, password } = userData;
        const userInfo = email + ":" + password;
        const convertBasic = btoa(userInfo);
        const authorizationHeaderValue = "Basic " + convertBasic;
        axios.defaults.headers['Authorization'] = authorizationHeaderValue;
    }
    else {
        delete axios.defaults.headers['Authorization'];
    }
};

export const getUser = (id) => {
    return axios.get(`${API_BASE_URL}/users/get/id/${id}`);
}

export const getTrainings = () => {
    return axios.get(`${API_BASE_URL}/trainings/get`);
}

export const getTraining = (id) => {
    return axios.get(`${API_BASE_URL}/trainings/get/${id}`);
}