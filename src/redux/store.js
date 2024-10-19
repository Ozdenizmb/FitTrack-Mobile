import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './AuthReducer';
import { setAuthorizationHeader } from '../api/ApiCalls';

const store = configureStore({
    reducer: {
        auth: AuthReducer,
    },
});

store.subscribe(() => {
    const state = store.getState().auth;
    setAuthorizationHeader(state);
});

export default store;
