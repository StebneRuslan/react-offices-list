import styled, { css } from 'styled-components';

export const OfficesWrapper = styled.div`
	display: flex;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px 0px;
  border: 1px solid rgb(234, 234, 234);
  background-color: rgb(255, 255, 255);
`;

export const OfficesTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: max-content;
  margin-bottom: 35px;
`;

export const OfficesTitle = styled.h1<{ disabled?: boolean}>`
  font-size: 32px;
  font-weight: normal;
  letter-spacing: 3px;
  color: rgb(83, 104, 126);
  margin: 0;
  ${props =>
    props.disabled && css`
      padding-left: 50px;
      position: relative;
      pointer-event: none;
      opacity: 0.8;
      &:before {
        content: '';
        position: absolute;
        left: 25px;
        top: 4px;
        display: block;
        width: 2px;
        height: 90%;
        background: rgb(183, 189, 196);
      }
    `
  }
`;

export const OfficeControlsWrapper = styled.div`
  display: flex;
  flex-direction: inherit;
  
  button {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
