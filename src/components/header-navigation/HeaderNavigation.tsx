import React from 'react';
import { Component } from 'react';
import { CustomTitle } from '../custom-title/CustomTitle';

interface Navigation {}

export class HeaderNavigation extends Component<Navigation, any> {
  render() {
    return (
      <div>
        <CustomTitle color={'white'}>Contact</CustomTitle>
        <CustomTitle color={'white'}>FAQs</CustomTitle>
        <CustomTitle color={'white'}>Save and Exit</CustomTitle>
      </div>
    );
  }
}