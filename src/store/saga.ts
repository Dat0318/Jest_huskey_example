import { fork, all } from '@redux-saga/core/effects';
// @ts-ignores
import orderSaga from './orders/orders.saga.ts';

export default function* rootSaga() {
  try {
    yield all([fork(orderSaga)]);
  } catch (e) {
    // eslint-disable-next-line no-console
    // console.log(e);
  }
}
