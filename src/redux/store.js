import { applyMiddleware, combineReducers, createStore } from 'redux';
import transactionsReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import { thunk } from 'redux-thunk';
// Create the persist configuration object
const persistConfig = {
  key: 'root',
  storage, // storage to use for persistence (localStorage, AsyncStorage, etc.)
};

const rootReducer = combineReducers({
  transactions: transactionsReducer,
});

// Wrap your root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer
const store = createStore(persistedReducer, applyMiddleware(thunk));

// Create a persistor to persist and rehydrate the store
const persistor = persistStore(store);

export { store, persistor };
