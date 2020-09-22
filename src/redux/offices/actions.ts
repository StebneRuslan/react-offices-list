import actionTypes from './action-types'
import { OfficeModel } from '../../models/office.model';

const getOfficeList = () => ({ type: actionTypes.GET_OFFICES });
const getOfficeListSuccess = (data: OfficeModel[]) => ({ type: actionTypes.GET_OFFICES_SUCCESS, payload: data });
const getOfficeListError = (data: string) => ({ type: actionTypes.GET_OFFICES_ERROR, err: data });

const createOffice = (data: OfficeModel) => ({ type: actionTypes.CREATE_OFFICE, payload: data});
const createOfficeSuccess = (data: OfficeModel) => ({ type: actionTypes.CREATE_OFFICE_SUCCESS, payload: data});
const createOfficeError = (data: string) => ({ type: actionTypes.CREATE_OFFICE_ERROR, err: data});

const removeOffice = (data: string) => ({ type: actionTypes.REMOVE_OFFICE, payload: data});
const removeOfficeSuccess = (data: string) => ({ type: actionTypes.REMOVE_OFFICE_SUCCESS, payload: data});
const removeOfficeError = (data: string) => ({ type: actionTypes.REMOVE_OFFICE_ERROR, err: data});

const updateOffice = (data: OfficeModel) => ({ type: actionTypes.UPDATE_OFFICE, payload: data});
const deleteOffice = (data: string) => ({ type: actionTypes.DELETE_OFFICE, payload: data});

export default {
  getOfficeList,
  getOfficeListSuccess,
  getOfficeListError,
  createOffice,
  createOfficeSuccess,
  createOfficeError,
  removeOffice,
  removeOfficeSuccess,
  removeOfficeError,
  updateOffice,
  deleteOffice
}
