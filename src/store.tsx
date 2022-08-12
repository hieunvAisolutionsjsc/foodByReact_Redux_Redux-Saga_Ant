
import { applyMiddleware, createStore } from 'redux';
import combine from './redux/root';
import createSagaMiddleware from "redux-saga";
import watchData from './redux/saga/food';
// ...
const sagaMiddleware = createSagaMiddleware();
const store = createStore(combine, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchData)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export default store 