import update from 'immutability-helper'
import { OfficeModel } from '../../models/office.model';
import officeActions from './action-types';

export interface OfficesState {
  offices: {
    response: OfficeModel[],
    error: string,
    isFetching: boolean
  }
  errorMessage: string;
  showForm: boolean;
}

export const initialState: OfficesState = {
  offices: {
    response: [],
    error: '',
    isFetching: false
  },
  showForm: false,
  errorMessage: ''
};

export default (state: OfficesState = initialState, action: any) => {
  switch (action.type) {
    case officeActions.GET_OFFICES_SUCCESS:
      return update(state, {
        offices: {
          response: {
            $set: action.payload
          }
        }
      });
    case officeActions.CREATE_OFFICE_SUCCESS:
      return update(state, {
        offices: {
          response: {
            $push: [action.payload]
          }
        }
      });
    case officeActions.REMOVE_OFFICE_SUCCESS:
      const position = state.offices.response.findIndex((office: OfficeModel) => office.name === action.payload);
      return update(state, {
        offices: {
          response: {
            $splice: [[position, 1]]
          }
        }
      });
    default:
      return state;
  }
}
