import actionTypes from './action-types'
import { OfficeModel } from '../../models/office.model';

const toggleNewOfficeForm = () => ({ type: actionTypes.TOGGLE_NEW_OFFICE_FORM });
const toggleEditableOfficeForm = (data: string) => ({ type: actionTypes.TOGGLE_EDITABLE_OFFICE_FORM, payload: data });

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
const updateOfficeSuccess = (data: OfficeModel) => ({ type: actionTypes.UPDATE_OFFICE_SUCCESS, payload: data});
const updateOfficeError = (data: string) => ({ type: actionTypes.UPDATE_OFFICE_ERROR, payload: data});

export default {
  toggleNewOfficeForm,
  toggleEditableOfficeForm,
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
  updateOfficeSuccess,
  updateOfficeError
}
