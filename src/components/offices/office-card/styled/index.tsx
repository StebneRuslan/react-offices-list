import styled from 'styled-components';
import { InputTitle } from '../../../shared/TextInput';

export const OfficeCardWrapper = styled.div`
  display: flex;
  padding: 13px 32px 34px 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(215, 220, 226);
  border-radius: 2px;
  margin-bottom: 15px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;


export const OfficeAddressDetailsContainer = styled.div`
  display: flex;
  flex-grow: 2;
`;

export const OfficeAdditionalDetailsContainer = styled(OfficeAddressDetailsContainer)``;

export const OfficeDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OfficeDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OfficeDetailsText = styled.p`
  height: 15px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: normal;
  color: rgb(51, 65, 82);
  align-self: self-start;
  margin-top: 0;
  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`;


export const OfficeDetailsTitle = styled(InputTitle)`
  align-self: self-start;
`;

