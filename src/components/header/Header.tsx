import React from 'react';
import { Component } from 'react';
import logo from '../../images/logo.svg'
import styled from 'styled-components';
import { ControlTitle } from '../shared/ControlTitle';

interface HeaderProps {}

export const HeaderWrapper = styled.div`
  background-color: rgb(23, 87, 134);
  display: flex;
`

const MainHeaderWrapper = styled(HeaderWrapper)`
  height: 50px;
  padding: 15px 25px;
  margin-bottom: 25px;
  justify-content: space-between;
`

const HeaderNavigationWrapper = styled.div`
  align-items: center;
  display: flex;
`

const ImgWrapper = styled.img`
  margin-right: 30px;
`

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
