import styled, { css } from 'styled-components';

interface ButtonInterface {
  white?: boolean;
  blue?: boolean;
  withoutBorders?: boolean;
}

export const Button = styled.button<ButtonInterface>`
  width: auto;
  height: 32px;
  display: flex;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  align-items: center;
  padding: 0 15px;
  border-color: rgb(214, 214, 214);
  color: rgb(83, 104, 126);
  background: rgb(255, 255, 255);
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: 300ms ease-out;
  &:hover {
    color: rgb(255, 255, 255);
  }
  &:focus {
    outline:0;
  }
  ${props => 
    props.white && css`
      border-width: 1px;
      border-color: rgb(214, 214, 214);
      color: rgb(83, 104, 126);
      background: rgb(255, 255, 255);
    `  
  }  
  ${props => 
    props.blue && css`
      border-style: none;
      color: rgb(255, 255, 255);
      background: rgb(40, 136, 209);
      border-width: none;
    `  
  }
  ${props =>
    props.withoutBorders && css`
      border: none;
      &:hover {
        color: rgb(83, 104, 126);
      }
    `
  }
  &:before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 100%;
    background-color: rgb(23, 87, 134);

    transition: 300ms ease-out;
    transform: scale(0);
    ${props =>
      props.withoutBorders && css`
        background-color: #e1e1e1;
      `
    }
  }
  &:hover:before { 
    transform: scale(1.4);
  }
`
