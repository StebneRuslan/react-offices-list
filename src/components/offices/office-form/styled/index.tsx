import styled  from 'styled-components';

export const OfficeFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OfficeFormInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding-right: 50px;
`;

export const OfficeFormControlsWrapper = styled.div`
  display: flex;
  flex-direction: inherit;
  
  button {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
