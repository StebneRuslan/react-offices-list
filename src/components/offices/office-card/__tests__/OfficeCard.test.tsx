import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { OfficeCard } from '../OfficeCard';
import actions from '../../../../redux/offices/actions';

configure({ adapter: new Adapter() });

let props = {
  office: {
    officeType: false,
    name: 'name'
  },
  removeOffice: jest.fn().mockReturnValue(actions.removeOffice('name')),
  toggleEditableOfficeForm: jest.fn().mockReturnValue(actions.toggleEditableOfficeForm('name'))
};

describe('<OfficeCard />', () => {
  it('OfficeCard renders without crashing', () => {
    const component = shallow(<OfficeCard { ...props } />);
    expect(component).toMatchSnapshot()
  });

  it('OfficeCard renders without crashing', () => {
    const wrapper = shallow(<OfficeCard { ...props } />);
    expect(wrapper.exists()).toBe(true);
  });

  it('OfficeCard renders with props', () => {
    const wrapper = mount(<OfficeCard { ...props } />);
    expect(wrapper.props().office.officeType).toBe(false);
  });

  it('Should call the removeOffice function when clicked', () => {
    const wrapper = mount(<OfficeCard { ...props } />);
    expect(props.removeOffice.mock.calls.length).toBe(0);
    wrapper.find('#remove-office-button').at(0).simulate('click');
    expect(props.removeOffice).toHaveBeenCalledWith('name');
  });

  it('Should call the toggleEditableOfficeForm function when clicked', () => {
    const wrapper = mount(<OfficeCard { ...props } />);
    expect(props.toggleEditableOfficeForm.mock.calls.length).toBe(0);
    wrapper.find('#toggle-editable-office-button').at(0).simulate('click');
    expect(props.toggleEditableOfficeForm).toHaveBeenCalledWith('name');
  });
});
