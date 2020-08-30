import React from 'react';
import { Component } from 'react';
import logo from '../../images/logo.svg'
import { CustomTitle } from '../custom-title/CustomTitle';
import { HeaderNavigation } from '../header-navigation/HeaderNavigation';

interface HeaderProps {}

export class Header extends Component<HeaderProps, any> {
  render() {
    return(
      <header>
        <img alt='logo' src={logo}/>
        <CustomTitle color={'white'}>Profile Editor</CustomTitle>

        <HeaderNavigation />
      </header>
    )
  }
}
