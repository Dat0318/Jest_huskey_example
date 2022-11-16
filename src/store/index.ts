import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

// @ts-ignore
import rootReducer from './reducer.ts';
// @ts-ignore
import rootSaga from './saga.ts';
import { StoreState } from '../models/store';

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
export const store: Store<StoreState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
