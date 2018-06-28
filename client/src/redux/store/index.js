import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger';
import promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducers";

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer);
  
const loggerMiddleware = createLogger();

const middleware = composeWithDevTools(applyMiddleware(promise(), thunkMiddleware, loggerMiddleware));

export const store = createStore(persistedReducer,middleware);
export const persistor = persistStore(store);