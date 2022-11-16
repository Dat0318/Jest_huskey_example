import { combineReducers, ReducersMapObject } from 'redux';
import { ActionType } from 'typesafe-actions';
// @ts-ignore
import orderReducer from './orders/orders.reducer.ts';
import { StoreState } from '../models/store';

const rootReducer: ReducersMapObject<
  StoreState,
  ActionType<typeof import('../store/action').default>
> = {
  orders: orderReducer,
};

export default combineReducers(rootReducer);
