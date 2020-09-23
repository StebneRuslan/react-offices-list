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
    case officeActions.TOGGLE_NEW_OFFICE_FORM:
      return update(state, {
        showForm: { $set: !state.showForm }
      });
    case officeActions.TOGGLE_EDITABLE_OFFICE_FORM:
      const editPosition = state.offices.response.findIndex((office: OfficeModel) => office.name === action.payload);
      return update(state, {
        offices: {
          response: {
            $splice: [[
              editPosition,
              1,
              Object.assign(
                state.offices.response[editPosition],
                { editable: !state.offices.response[editPosition].editable }
                )
            ]]
          }
        }
      });
    case officeActions.UPDATE_OFFICE_SUCCESS:
      const updatePosition = state.offices.response.findIndex((office: OfficeModel) => office.name === action.payload.name);
      return update(state, {
        offices: {
          response: {
            $splice: [[updatePosition, 1, action.payload]]
          },
          isFetching: { $set: false }
        }
      });
    case officeActions.GET_OFFICES_SUCCESS:
      return update(state, {
        offices: {
          response: {
            $set: action.payload
          },
          isFetching: { $set: false }
        }
      });
    case officeActions.CREATE_OFFICE_SUCCESS:
      return update(state, {
        offices: {
          response: {
            $push: [action.payload]
          },
          isFetching: { $set: false }
        },
        showForm: { $set: false }
      });
    case officeActions.REMOVE_OFFICE_SUCCESS:
      const position = state.offices.response.findIndex((office: OfficeModel) => office.name === action.payload);
      return update(state, {
        offices: {
          response: {
            $splice: [[position, 1]]
          },
          isFetching: { $set: false }
        }
      });

    case officeActions.CREATE_OFFICE:
    case officeActions.GET_OFFICES:
    case officeActions.REMOVE_OFFICE:
    case officeActions.UPDATE_OFFICE:
      debugger;
      return update(state, {
        offices: {
          isFetching: { $set: true }
        }
      });
    default:
      return state;
  }
}
