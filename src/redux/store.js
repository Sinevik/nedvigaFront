import {applyMiddleware, compose, createStore} from 'redux';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';
import rootSaga from './rootSaga';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['storage'],
};

const pReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = compose;

const middlewares = [
  sagaMiddleware,
];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}


export const store = createStore(
    pReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
