import React, { Component } from 'react';
import {
  OfficeFormControlsWrapper, OfficeFormInputsWrapper,
  OfficeFormWrapper
} from './styled';
import { Button } from '../../shared/Button';
import { InputLabel, InputTitle, TextInput } from '../../shared/TextInput';

export class OfficeForm extends Component {
  render() {
    return (
      <OfficeFormWrapper>
        <OfficeFormInputsWrapper>
          <InputLabel>
            <InputTitle>*Country:</InputTitle>
            <TextInput />
          </InputLabel>
          <InputLabel>
            <InputTitle>*State/Province:</InputTitle>
            <TextInput />
          </InputLabel>
          <InputLabel>
            <InputTitle>*Postal Code:</InputTitle>
            <TextInput />
          </InputLabel>
          <InputLabel>
            <InputTitle>*City:</InputTitle>
            <TextInput />
          </InputLabel>
          <InputLabel>
            <InputTitle>*Street Address:</InputTitle>
            <TextInput />
          </InputLabel>
          <InputLabel>
            <InputTitle>Address 2:</InputTitle>
            <TextInput />
          </InputLabel>
        </OfficeFormInputsWrapper>
        <OfficeFormInputsWrapper>
          <InputLabel>
            <InputTitle>Phone:</InputTitle>
            <TextInput />
          </InputLabel>
          <InputLabel>
            <InputTitle>Fax:</InputTitle>
            <TextInput />
          </InputLabel>
          <InputLabel>
            <InputTitle>Email:</InputTitle>
            <TextInput />
          </InputLabel>
          <InputLabel>
            <InputTitle>Office Type:</InputTitle>
            <TextInput type="checkbox" value="Admin"/>
            Primary HQ
          </InputLabel>
        </OfficeFormInputsWrapper>
        <OfficeFormControlsWrapper>
          <Button white>Cancel</Button>
          <Button blue>Save</Button>
        </OfficeFormControlsWrapper>
      </OfficeFormWrapper>
    );
  }
}
