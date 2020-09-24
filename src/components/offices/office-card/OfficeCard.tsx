import React from 'react';
import {
  OfficeAdditionalDetailsContainer,
  OfficeDetails,
  OfficeAddressDetailsContainer,
  OfficeCardWrapper,
  OfficeDetailsText,
  OfficeDetailsTitle,
  OfficeDetailsContainer
} from './elements';
import { Button } from '../../shared/Button';
import { OfficeControlsWrapper } from '../elements';
import { pick } from 'lodash';

export function OfficeCard (props: any) {
  const renderPrimary = (value: boolean) => value ? <OfficeDetailsText>Primary HQ</OfficeDetailsText> : null;
  const renderAddressDetails = () => {
    const additionalAddressDetails = Object.values(pick(props.office, ['city', 'postalCode'])).join(', ');
    const details = Object.values(pick(props.office, ['streetAddress', 'country', 'secondAddress']));
    return [additionalAddressDetails].concat(details).map((element, index) => <OfficeDetailsText key={index}>{element}</OfficeDetailsText>);
  };
  const renderUserDetails = () => {
    const details: any = pick(props.office, ['phone', 'fax', 'email']);
    const result = [];
    for(let key in details) {
      result.push(
        <OfficeDetailsContainer key={key}>
          <OfficeDetailsTitle>{key}</OfficeDetailsTitle>
          <OfficeDetailsText>{details[key]}</OfficeDetailsText>
        </OfficeDetailsContainer>
      )
    }
    return result;
  };
  return (
    <OfficeCardWrapper>
      <OfficeAddressDetailsContainer>
        <OfficeDetailsTitle>Address</OfficeDetailsTitle>
        <OfficeDetails>
          {renderPrimary(props.office.officeType)}
          {renderAddressDetails()}
        </OfficeDetails>
      </OfficeAddressDetailsContainer>

      <OfficeAdditionalDetailsContainer>
        <OfficeDetails>
          {renderUserDetails()}
        </OfficeDetails>
      </OfficeAdditionalDetailsContainer>

      <OfficeControlsWrapper>
        <Button white onClick={() => props.removeOffice(props.office.name)}>Remove</Button>
        <Button blue onClick={() => props.toggleEditableOfficeForm(props.office.name)}>Edit</Button>
      </OfficeControlsWrapper>
    </OfficeCardWrapper>
  );
}
