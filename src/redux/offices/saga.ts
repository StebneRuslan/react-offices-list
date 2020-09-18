import { call, put } from 'redux-saga/effects';

import * as officeService from '../../services/offices/index';
import officeActions from './actions';

function * getOffices() {
  try {
    const response = yield call(officeService.getOfficesList);
    yield put(officeActions.getOfficeListSuccess(response))
  } catch (error) {
    yield put(officeActions.getOfficeListError(error.message))
  }
}

export default {
  getOffices
}
