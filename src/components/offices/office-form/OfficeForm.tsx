import React from 'react';
import { OfficeFormInputsWrapper, OfficeFormWrapper } from './elements';
import { Button } from '../../shared/Button';
import { InputLabel, InputTitle, TextInput } from '../../shared/TextInput';
import { useForm } from 'react-hook-form';
import { OfficeControlsWrapper } from '../elements';
import { OfficeModel } from '../../../models/office.model';
import { officeFormSchema } from './office-form-scema';
import { yupResolver } from '@hookform/resolvers';
import { officeFormFieldInterface, officeFormFields } from './office-form-model';

interface OfficeFormInterface {
  createOffice: (office: OfficeModel) => void;
  closeNewOfficeForm: () => void;
  updateOffice: (office: OfficeModel) => void;
  toggleEditableOfficeForm: (name: string) => void;
  name: string;
  office?: OfficeModel;
}

export function OfficeForm (props: OfficeFormInterface) {
  const { register, handleSubmit, errors } = useForm<OfficeModel>({
    defaultValues: { ...props.office },
    resolver: yupResolver(officeFormSchema)
  });
  
  const saveOffice = (office: OfficeModel) => {
    props.office
      ? props.updateOffice({ editable: false, name: props.office.name, ...office })
      : props.createOffice({ editable: false, ...office });
  };
  
  const handleClose = () => {
    props.office ? props.toggleEditableOfficeForm(props.name) : props.closeNewOfficeForm()
  };
  
  return (
    <OfficeFormWrapper>
      <OfficeFormInputsWrapper>
        {officeFormFields.addressConfig.map((details: officeFormFieldInterface, index: number) =>
          <InputLabel key={index}>
            <InputTitle>{details.title}</InputTitle>
            <TextInput error={!!errors.country} name={details.name} ref={register} type={details.type}/>
          </InputLabel>)}
      </OfficeFormInputsWrapper>
      <OfficeFormInputsWrapper>
        {officeFormFields.personalDataConfigs.map((details: officeFormFieldInterface, index: number) =>
          <InputLabel key={index}>
            <InputTitle>{details.title}</InputTitle>
            <TextInput error={!!errors.country} name={details.name} ref={register} type={details.type}/>
            { details.type === 'checkbox' ? 'Primary HQ' : null}
          </InputLabel>)}
      </OfficeFormInputsWrapper>
      <OfficeControlsWrapper>
        <Button white onClick={handleClose}>Cancel</Button>
        <Button blue onClick={handleSubmit(saveOffice)}>Save</Button>
      </OfficeControlsWrapper>
    </OfficeFormWrapper>
  )
}
