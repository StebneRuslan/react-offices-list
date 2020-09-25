import * as yup from 'yup';

export const officeFormSchema = yup.object().shape({
  country: yup.string().required(),
  state: yup.string().required(),
  postalCode: yup.string().required(),
  city: yup.string().required(),
  streetAddress: yup.string().required(),
  secondAddress: yup.string(),
  phone: yup.string().required(),
  fax: yup.string().required(),
  email: yup.string().required().email(),
  officeType: yup.string().required()
});
