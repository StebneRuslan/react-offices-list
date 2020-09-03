import styled, { css } from 'styled-components';

interface ControlTitleInterface {
  primary?: boolean;
  margin?: string;
  animated?: boolean;
}

export const ControlTitle = styled('a')<ControlTitleInterface>`
  z-index: 1;
  color: rgb(83, 104, 126);
  font-size: 14px;
  text-decoration: none;
  letter-spacing: 0.4px;
  cursor: pointer;
  ${props =>
    props.primary && css`
      color: rgb(255, 255, 255);
      margin-right: 40px;
    `
  }
  &:last-child {
    margin-right: 0;
  }
`
