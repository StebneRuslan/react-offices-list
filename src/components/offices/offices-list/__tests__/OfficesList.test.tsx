import React from 'react';
import { shallow } from 'enzyme';
import { OfficesList, OfficesListInterface } from '../OfficesList';
import actions from '../../../../redux/offices/actions';

const props: OfficesListInterface = {
  isFetching: false,
  toggleNewOfficeForm: jest.fn(),
  getOfficeList: () => jest.fn().mockReturnValue(actions.getOfficeList()),
  offices: [{
    officeType: false,
    name: 'name',
    editable: false,
    city: 'city',
    country: 'country',
    email: 'email@appcreative.net',
    fax: 'fax',
    phone: '88888888',
    postalCode: 'code',
    secondAddress: 'secondAddress',
    state: 'state',
    streetAddress: 'secondAddress'
  }],
  showForm: false,
};

describe('<OfficesList />', () => {
  it('OfficeCard renders without crashing', () => {
    const component = shallow(<OfficesList { ...props } />);
    expect(component).toMatchSnapshot()
  });
  
  it('Should call the toggleNewOfficeForm function when clicked', () => {
    const wrapper = shallow(<OfficesList { ...props } />);
    expect(props.toggleNewOfficeForm).toHaveBeenCalledTimes(0);
    wrapper.find('#toggle-new-office-form').at(0).simulate('click');
    expect(props.toggleNewOfficeForm).toHaveBeenCalledTimes(1);
  });
});
