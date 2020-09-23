import Loader from 'react-loader-spinner'
import React from 'react';

import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 2;
  filter: blur(8px);
  background-color: #c0bbc36e;
  div {
    left: 50%;
    top: 50%;
    transform: translate(50%, -50%);
  }
`;

export function Spinner() {
  return(
    <SpinnerWrapper>
      <Loader
        type='Puff'
        color='#00BFFF'
        height={100}
        width={100}
      />
    </SpinnerWrapper>
  );
}
