import { takeLatest, all } from 'redux-saga/effects'

import officesSaga from './saga'
import officesActions from './action-types'

function * watchOffices() {
  yield all([
    takeLatest(officesActions.GET_OFFICES, officesSaga.getOffices),
    takeLatest(officesActions.REMOVE_OFFICE, officesSaga.removeOffice),
    takeLatest(officesActions.CREATE_OFFICE, officesSaga.addOffice),
    takeLatest(officesActions.UPDATE_OFFICE, officesSaga.updateOffice)
  ])
}

export {
  watchOffices
}
