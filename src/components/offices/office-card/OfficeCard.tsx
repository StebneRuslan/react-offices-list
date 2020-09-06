import React from 'react';
import {
  OfficeAdditionalDetailsContainer,
  OfficeDetails,
  OfficeAddressDetailsContainer,
  OfficeCardWrapper,
  OfficeDetailsText,
  OfficeDetailsTitle,
  OfficeDetailsContainer
} from './styled';
import { Button } from '../../shared/Button';
import { OfficeControlsWrapper } from '../styled';

export function OfficeCard (props: any) {
  const renderPrimary = (value: boolean) => value ? <OfficeDetailsText>Primary HQ</OfficeDetailsText> : null;

  return (
    <OfficeCardWrapper>
      <OfficeAddressDetailsContainer>
        <OfficeDetailsTitle>Address</OfficeDetailsTitle>
        <OfficeDetails>
          {renderPrimary(props.value.officeType)}
          <OfficeDetailsText>{props.value.streetAddress}</OfficeDetailsText>
          <OfficeDetailsText>{props.value.city}, {props.value.postalCode}</OfficeDetailsText>
          <OfficeDetailsText>{props.value.country}</OfficeDetailsText>
          <OfficeDetailsText>{props.value.secondAddress}</OfficeDetailsText>
        </OfficeDetails>
      </OfficeAddressDetailsContainer>

      <OfficeAdditionalDetailsContainer>
        <OfficeDetails>
          <OfficeDetailsContainer>
            <OfficeDetailsTitle>Address</OfficeDetailsTitle>
            <OfficeDetailsText>ddfgd</OfficeDetailsText>
          </OfficeDetailsContainer>
          <OfficeDetailsContainer>
            <OfficeDetailsTitle>Address</OfficeDetailsTitle>
            <OfficeDetailsText>ddfgd</OfficeDetailsText>
          </OfficeDetailsContainer>
        </OfficeDetails>
      </OfficeAdditionalDetailsContainer>

      <OfficeControlsWrapper>
        <Button white>Cancel</Button>
        <Button blue>Save</Button>
      </OfficeControlsWrapper>
    </OfficeCardWrapper>
  );
}
