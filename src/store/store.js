import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import { mainReducer } from './reducers'
import rootSaga from './Sagas/RootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = (state, action) => {
      return mainReducer(state, action)
}
const logger = createLogger({
    collapsed: true,
  });

export const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware, logger)),
    )

sagaMiddleware.run(rootSaga);
