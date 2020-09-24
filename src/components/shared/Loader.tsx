import Loader from 'react-loader-spinner'
import React from 'react';

import styled from 'styled-components';

const BlurBackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 2;
  backdrop-filter: blur(3px);
`;

const LoaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  #spinner {
    left: 50%;
    top: 50%;
    z-index: 3;
  }
`;

const SpinnerContainer = styled.div``;

export function Spinner() {
  return(
    <LoaderContainer>
      <BlurBackgroundContainer />
      <SpinnerContainer id='spinner'>
        <Loader
          type='Circles'
          color='#00BFFF'
          height={200}
          width={200}
        />
      </SpinnerContainer>
    </LoaderContainer>
  );
}
