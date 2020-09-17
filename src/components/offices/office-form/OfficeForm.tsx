import React from 'react';
import { OfficeFormInputsWrapper, OfficeFormWrapper } from './styled';
import { Button } from '../../shared/Button';
import { InputLabel, InputTitle, TextInput } from '../../shared/TextInput';
import { useForm } from 'react-hook-form';
import { OfficeControlsWrapper } from '../styled';
import { OfficeModel } from '../../../models/office.model';
import * as officeService from '../../../services/offices';

interface OfficeFormInterface {
  saveOffice: Function;
  closeForm: any;
  editable?: boolean;
  office?: OfficeModel;
}

export function OfficeForm (props: OfficeFormInterface) {
  const { register, handleSubmit } = useForm<OfficeModel>();
  
  const saveOffice = (office: OfficeModel) => {
    officeService.addOffice(office)
      .then((office: OfficeModel) => {
        props.saveOffice({ editable: false, ...office })
      })
      .catch((err: any) => {
        console.log('rerer', err);
      })
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
        <Button white onClick={props.closeForm}>Cancel</Button>
        <Button blue onClick={handleSubmit(saveOffice)}>Save</Button>
      </OfficeControlsWrapper>
    </OfficeFormWrapper>
  )
}
