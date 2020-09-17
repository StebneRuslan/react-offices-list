import styled from 'styled-components';

export const OfficesFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OfficesFooterControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  &:last-child {
    justify-content: flex-end;
  }
  button {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
