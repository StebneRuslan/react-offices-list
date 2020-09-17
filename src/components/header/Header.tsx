import React from 'react';
import { Component } from 'react';
import logo from '../../images/logo.svg'
import {
  HeaderNavigationWrapper,
  ImgWrapper,
  MainHeaderWrapper
} from './styled'
import { ControlTitle } from '../shared/ControlTitle';

interface HeaderProps {}

export class Header extends Component<HeaderProps, any> {
  render() {
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
}
