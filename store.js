import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers'
import rootSaga from './sages'
import {sagaLogger} from './sages'

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(loggerMiddleware,sagaMiddleware))
sagaMiddleware.run(rootSaga)
loggerMiddleware.run(sagaLogger)
export default store;