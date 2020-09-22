import { call, put } from 'redux-saga/effects';

import * as officeService from '../../services/offices/index';
import officeActions from './actions';
import { OfficeModel } from '../../models/office.model';

function * getOffices() {
  try {
    const response = yield call(officeService.getOfficesList);
    yield put(officeActions.getOfficeListSuccess(response))
  } catch (error) {
    yield put(officeActions.getOfficeListError(error.message))
  }
}

function * addOffice(action: { type: string; payload: OfficeModel }) {
  try {
    const response = yield call(officeService.addOffice, action.payload);
    yield put(officeActions.createOfficeSuccess(response))
  } catch (error) {
    yield put(officeActions.createOfficeError(error.message))
  }
}

function * removeOffice(action: { type: string; payload: string }) {
  try {
    const response = yield call(officeService.removeOffice, action.payload);
    yield put(officeActions.removeOfficeSuccess(response))
  } catch (error) {
    yield put(officeActions.removeOfficeError(error.message))
  }
}

export default {
  getOffices,
  removeOffice,
  addOffice
}
