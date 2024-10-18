import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './AuthReducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAuthorizationHeader } from '../api/ApiCalls';

const persistConfig = {
    key: 'fittrack-profile',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, AuthReducer);

const ConfigureStore = () => {

    const composeEnhancers = compose;
    
    const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

    const persistor = persistStore(store);

    store.subscribe(() => {
        const state = store.getState();
        setAuthorizationHeader(state);
    });

    return { store, persistor };

}

export default ConfigureStore