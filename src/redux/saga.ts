import { fork } from 'redux-saga/effects';

import { watchOffices } from './offices/watchers';

export default function * rootSaga () {
  yield fork(watchOffices);
}
