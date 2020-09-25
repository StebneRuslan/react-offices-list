export interface officeFormFieldInterface {
  title: string;
  name: string;
  type: string;
}

export const officeFormFields: {
  addressConfig: officeFormFieldInterface[],
  personalDataConfigs: officeFormFieldInterface[]
} = {
  addressConfig: [{
    title: '*Country:',
    name: 'country',
    type: 'input'
  }, {
    title: '*State/Province:',
    name: 'state',
    type: 'input'
  }, {
    title: '*Postal Code:',
    name: 'postalCode',
    type: 'input'
  }, {
    title: '*City:',
    name: 'city',
    type: 'input'
  }, {
    title: '*Street Address:',
    name: 'streetAddress',
    type: 'input'
  }, {
    title: 'Address 2:',
    name: 'secondAddress',
    type: 'input'
  }],
  personalDataConfigs: [{
    title: '*Phone:',
    name: 'phone',
    type: 'input'
  }, {
    title: '*Fax:',
    name: 'fax',
    type: 'input'
  }, {
    title: '*Email:',
    name: 'email',
    type: 'input'
  }, {
    title: '*Office Type:',
    name: 'officeType',
    type: 'checkbox'
  }]
};
