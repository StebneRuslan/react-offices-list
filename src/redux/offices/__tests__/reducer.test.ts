import reducer, { OfficesState } from '../reducer'
import types from '../action-types'
import { mockedOffice } from '../mock/mock';

const initialState: OfficesState = {
  offices: { response: [], error: '', isFetching: false },
  showForm: false,
  errorMessage: ''
};

describe('Office reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });
  
  it('should handle CREATE_OFFICE_SUCCESS', () => {
    expect(reducer({
      offices: { response: [], error: '', isFetching: false },
      showForm: false,
      errorMessage: ''
    }, { type: types.CREATE_OFFICE_SUCCESS, payload: mockedOffice }))
      .toEqual({
        offices: { response: [mockedOffice], error: '', isFetching: false },
        showForm: false,
        errorMessage: ''
      });
  });

  it('should handle REMOVE_OFFICE_SUCCESS', () => {
    expect(reducer({
      offices: { response: [mockedOffice], error: '', isFetching: false },
      showForm: false,
      errorMessage: ''
    }, { type: types.REMOVE_OFFICE_SUCCESS, payload: 'name' }))
      .toEqual({
        offices: { response: [], error: '', isFetching: false },
        showForm: false,
        errorMessage: ''
      });
  })
});
