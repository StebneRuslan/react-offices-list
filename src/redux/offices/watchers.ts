import { takeLatest, all } from 'redux-saga/effects'

import officesSaga from './saga'
import officesActions from './action-types'

function * watchOffices() {
  yield all([
    takeLatest(officesActions.GET_OFFICES, officesSaga.getOffices)
  ])
}

export {
  watchOffices
}
