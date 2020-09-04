import styled from 'styled-components';

export const InputLabel = styled.label`
  right: calc(100% + 10px);
  font-size: 14px;
  letter-spacing: 0.4px;
  color: rgb(83, 104, 126);
  white-space: nowrap;
  z-index: 1;
  display: flex;
  margin-bottom: 10px;
`;

export const InputTitle = styled.span`
  font-size: 14px;
  letter-spacing: 0.4px;
  color: rgb(83, 104, 126);
  white-space: nowrap;
  z-index: 1;
  align-self: center;
  margin-right: 10px;
  min-width: 120px;
  text-align: end;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 25px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(216, 221, 227);
  border-radius: 2px;
  padding: 0px 5px;
  font-size: 14px;
  letter-spacing: 0.4px;
  color: rgb(51, 65, 82);
  outline: none;
  transition-duration: 250ms;
  transition-property: border-color, box-shadow;
  
  &:active {
    border-color: rgb(234, 234, 234);
  }
  
  &:focus {
    border-color: rgb(40, 136, 209);
    box-shadow: rgba(0, 123, 255, 0.25) 0px 0px 0px 0.2rem;
  }
  
  &[type=checkbox] {
    width: 15px;
    height: 15px;
    margin: auto 15px auto 0;
  }
`;
