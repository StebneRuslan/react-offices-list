import actions from '../actions'
import types from '../action-types'
import { mockedOffice } from '../mock/mock';

describe('Office actions', () => {
  // Create office actions
  it('should create an action to add a office', () => {
    const expectedAction = { type: types.CREATE_OFFICE, payload: mockedOffice };
    expect(actions.createOffice(mockedOffice)).toEqual(expectedAction)
  });

  it('should create an action to success adding a office', () => {
    const expectedAction = { type: types.CREATE_OFFICE_SUCCESS, payload: mockedOffice };
    expect(actions.createOfficeSuccess(mockedOffice)).toEqual(expectedAction)
  });

  it('should create an action to error on add office', () => {
    const expectedAction = { type: types.CREATE_OFFICE_ERROR, payload: 'Error' };
    expect(actions.createOfficeError('Error')).toEqual(expectedAction)
  })
});
