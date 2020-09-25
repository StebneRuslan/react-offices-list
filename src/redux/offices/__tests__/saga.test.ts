import { runSaga } from 'redux-saga';
import actions, { OfficeActionInterface } from '../actions';
import * as officeApi from '../../../services/offices';
import saga from '../saga';
import { mockedOffice } from './mock/mock';

describe('Office saga', () => {
  it('should call api and dispatch success action', async () => {
    const createOfficeSpy = jest.spyOn(officeApi, 'addOffice').mockImplementation(() => Promise.resolve(mockedOffice));
    const dispatched: OfficeActionInterface[] = [];
    await runSaga({ dispatch: (action: OfficeActionInterface) => dispatched.push(action) }, saga.addOffice, actions.createOffice(mockedOffice));
    
    expect(createOfficeSpy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([actions.createOfficeSuccess(mockedOffice)]);
    createOfficeSpy.mockClear();
  });
  
  it('should call api and dispatch error action', async () => {
    const createOfficeSpy = jest.spyOn(officeApi, 'addOffice').mockImplementation(() => Promise.reject(new Error('Test error')));
    const dispatched: OfficeActionInterface[] = [];
    await runSaga({ dispatch: (action: OfficeActionInterface) => dispatched.push(action) }, saga.addOffice, actions.createOffice(mockedOffice));
    
    expect(createOfficeSpy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([actions.createOfficeError('Test error')]);
    createOfficeSpy.mockClear();
  });
});
