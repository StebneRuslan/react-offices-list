import React from 'react';

// images
import logo from '../../images/logo.svg';

// styled
import { ControlTitle } from '../shared/ControlTitle';
import { HeaderNavigationWrapper, ImgWrapper, MainHeaderWrapper } from './elements'

export function Header() {
  return(
    <MainHeaderWrapper>
      <HeaderNavigationWrapper>
        <ImgWrapper alt='logo' src={logo}/>
        <ControlTitle primary>Profile Editor</ControlTitle>
      </HeaderNavigationWrapper>
      <HeaderNavigationWrapper>
        <ControlTitle primary>Contact</ControlTitle>
        <ControlTitle primary>FAQs</ControlTitle>
        <ControlTitle primary>Save and Exit</ControlTitle>
      </HeaderNavigationWrapper>
    </MainHeaderWrapper>
  )
}
