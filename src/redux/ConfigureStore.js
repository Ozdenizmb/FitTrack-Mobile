import { createStore, combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import { setAuthorizationHeader } from '../api/ApiCalls';

const ConfigureStore = () => {

    let stateInLocaleStorage = {
        isLoggedIn : false,
        id : undefined,
        email : undefined,
        password : undefined
    }
    const initialState = stateInLocaleStorage;
    setAuthorizationHeader(initialState);

    const reducer = combineReducers({ data: AuthReducer });
    const store = createStore(reducer);

    return store;

}

export default ConfigureStore