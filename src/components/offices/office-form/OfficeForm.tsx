import React from 'react';
import { OfficeFormInputsWrapper, OfficeFormWrapper } from './elements';
import { Button } from '../../shared/Button';
import { InputLabel, InputTitle, TextInput } from '../../shared/TextInput';
import { useForm } from 'react-hook-form';
import { OfficeControlsWrapper } from '../elements';
import { OfficeModel } from '../../../models/office.model';

interface OfficeFormInterface {
  createOffice: (office: OfficeModel) => void;
  closeNewOfficeForm: () => void;
  updateOffice: (office: OfficeModel) => void;
  toggleEditableOfficeForm: (name: string) => void;
  name: string;
  office?: OfficeModel;
}

export function OfficeForm (props: OfficeFormInterface) {
  const { register, handleSubmit } = useForm<OfficeModel>({
    defaultValues: { ...props.office }
  });
  
  const saveOffice = (office: OfficeModel) => {
    props.office
      ? props.updateOffice({ editable: false, name: props.office.name, ...office })
      : props.createOffice({ editable: false, ...office });
  };
  
  const handleClose = () => {
    props.office
      ? props.toggleEditableOfficeForm(props.name)
      : props.closeNewOfficeForm()
  };
  
  return (
    <OfficeFormWrapper>
      <OfficeFormInputsWrapper>
        <InputLabel>
          <InputTitle>*Country:</InputTitle>
          <TextInput name="country" ref={register}/>
        </InputLabel>
        <InputLabel>
          <InputTitle>*State/Province:</InputTitle>
          <TextInput name="state" ref={register}/>
        </InputLabel>
        <InputLabel>
          <InputTitle>*Postal Code:</InputTitle>
          <TextInput name="postalCode" ref={register}/>
        </InputLabel>
        <InputLabel>
          <InputTitle>*City:</InputTitle>
          <TextInput name="city" ref={register}/>
        </InputLabel>
        <InputLabel>
          <InputTitle>*Street Address:</InputTitle>
          <TextInput name="streetAddress" ref={register}/>
        </InputLabel>
        <InputLabel>
          <InputTitle>Address 2:</InputTitle>
          <TextInput name="secondAddress" ref={register}/>
        </InputLabel>
      </OfficeFormInputsWrapper>
      <OfficeFormInputsWrapper>
        <InputLabel>
          <InputTitle>Phone:</InputTitle>
          <TextInput name="phone" ref={register}/>
        </InputLabel>
        <InputLabel>
          <InputTitle>Fax:</InputTitle>
          <TextInput name="fax" ref={register}/>
        </InputLabel>
        <InputLabel>
          <InputTitle>Email:</InputTitle>
          <TextInput name="email" ref={register}/>
        </InputLabel>
        <InputLabel>
          <InputTitle>Office Type:</InputTitle>
          <TextInput name="officeType" ref={register} type="checkbox" value="Admin"/>
          Primary HQ
        </InputLabel>
      </OfficeFormInputsWrapper>
      <OfficeControlsWrapper>
        <Button white onClick={handleClose}>Cancel</Button>
        <Button blue onClick={handleSubmit(saveOffice)}>Save</Button>
      </OfficeControlsWrapper>
    </OfficeFormWrapper>
  )
}
