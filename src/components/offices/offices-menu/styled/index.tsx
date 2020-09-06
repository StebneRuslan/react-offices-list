import styled, { css } from 'styled-components';

const MenuWithBottomBorder = styled.div`
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-style: solid;
  border-color: rgb(216, 221, 227);
`

export const OfficesMenuHeader = styled.div`
  background-color: rgb(23, 87, 134);
  display: flex;
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const OfficesMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: rgb(233, 240, 245);
  width: 200px;
  min-width: 200px;
`;

export const OfficeMenuTitleWrapper = styled(MenuWithBottomBorder)`
  z-index: 1;
  padding-left: 25px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid rgb(233, 240, 245);
  position: relative;
  color: rgb(83, 104, 126);
  font-size: 14px;
  transition: 300ms ease-out;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 0;
    background-color: #2888d1;
    z-index: -1;
    transition: 300ms ease-out;
  }
  &:hover:before { 
    width: 100%;
  }
  &:hover {
    color: rgb(255, 255, 255);
  }
`;

interface OpenedMenuTitleWrapperInterface {
  active?: boolean;
  disabled?: boolean
}

export const OpenedMenuWrapper = styled(MenuWithBottomBorder)`
  padding-bottom: 10px;
`;

export const OpenedMenuTitle = styled.a<OpenedMenuTitleWrapperInterface>`
  z-index: 1;
  padding-left: 25px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid rgb(233, 240, 245);
  position: relative;
  color: rgb(83, 104, 126);
  font-size: 14px;
  ${props =>
    props.active && css`
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 3px;
        background-color: #2888d1;
        z-index: -1;
      } 
    `
  }
  ${props =>
    props.disabled && css`
      pointer-event: none;
      opacity: 0.8;
    `
  }
`;
