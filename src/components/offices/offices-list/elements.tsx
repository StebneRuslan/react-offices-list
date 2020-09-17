import styled from 'styled-components';

export const OfficesListWrapper = styled.div`
  display: flex;
  flex-grow: 3;
  margin: 10px 60px 40px;
  flex-direction: column;
`;

export const OfficeControlsContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  flex-grow: 1;
`;

export const OfficeCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 35px;
  padding-bottom: 38px;
  border-width: 1px 0px;
  border-style: dashed;
  border-color: rgb(183, 189, 196);
  margin-bottom: 39px;
`;

export const OfficeCount = styled.p`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.4px;
  color: rgb(51, 65, 82);
  cursor: default;
  align-self: center;
  display: flex;
  margin: 0 0 0 auto;
`;
