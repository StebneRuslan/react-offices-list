import { OfficeModel } from '../../models/office.model';
import * as api from '../api';

const OFFICE_BASE_URL = 'https://bilmakovchik-offices.firebaseio.com';

function handleOfficeName(data: any): OfficeModel[] {
  const res: OfficeModel[] = [];
  for(let key in data) {
    res.push({ ...data[key], name: key })
  }
  return res;
}

export function addOffice(office: OfficeModel) {
  return api.post(`${OFFICE_BASE_URL}/offices.json`, office)
    .then(({ data }: any) => ({ ...office, name: data.name }))
}

export function updateOffice(office: OfficeModel) {
  return api.put(`${OFFICE_BASE_URL}/offices/${office.name}.json`, office)
    .then(({ data }: any) => ({ ...office, name: data.name }))
}

export function getOfficesList() {
  return api.get(`${OFFICE_BASE_URL}/offices.json`)
    .then(({ data }: any) => handleOfficeName(data))
}

export function removeOffice(name: string) {
  return api.remove(`${OFFICE_BASE_URL}/offices/${name}.json`)
}

