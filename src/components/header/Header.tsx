import React from 'react';
import { Component } from 'react';
import logo from '../../images/logo.svg'

interface HeaderProps {}

export class Header extends Component<HeaderProps, any> {
  render() {
    return(
      <header>
        <img src={logo}/>
      </header>
    )
  }
}
