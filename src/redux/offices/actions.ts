import actionTypes from './action-types'
import { OfficeModel } from '../../models/office.model';

const getOfficeList = () => ({ type: actionTypes.GET_OFFICES });
const getOfficeListSuccess = (data: OfficeModel[]) => ({ type: actionTypes.GET_OFFICES_SUCCESS, payload: data });
const getOfficeListError = (data: string) => ({ type: actionTypes.GET_OFFICES_ERROR, err: data });

const createOffice = (data: OfficeModel) => ({ type: actionTypes.CREATE_OFFICE, payload: data});
const updateOffice = (data: OfficeModel) => ({ type: actionTypes.UPDATE_OFFICE, payload: data});
const deleteOffice = (data: string) => ({ type: actionTypes.DELETE_OFFICE, payload: data});

export default {
  getOfficeList,
  getOfficeListSuccess,
  getOfficeListError,
  createOffice,
  updateOffice,
  deleteOffice
}
