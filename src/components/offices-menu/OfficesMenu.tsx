import React from 'react';
import { Component } from 'react';
import {
  OfficesMenuHeader,
  OfficesMenuWrapper,
  OfficeMenuTitleWrapper,
  OpenedMenuTitle,
  OpenedMenuWrapper
} from './styled';
import { ControlTitle } from '../shared/ControlTitle';

import menuHeader from '../../images/menu-header.svg';

export class OfficesMenu extends Component<any, any> {
  render() {
    return (
      <OfficesMenuWrapper>
        <OfficesMenuHeader>
          <img src={menuHeader} />
        </OfficesMenuHeader>
        <div>
          <OfficeMenuTitleWrapper>COMPANY INFO</OfficeMenuTitleWrapper>
          <OpenedMenuWrapper>
            <OpenedMenuTitle>Basic Info</OpenedMenuTitle>
            <OpenedMenuTitle active>Offices</OpenedMenuTitle>
            <OpenedMenuTitle disabled>Competitors</OpenedMenuTitle>
          </OpenedMenuWrapper>
          <OfficeMenuTitleWrapper>MY FIRM</OfficeMenuTitleWrapper>
          <OfficeMenuTitleWrapper>DETAILS</OfficeMenuTitleWrapper>
          <OfficeMenuTitleWrapper>FINANCIALS</OfficeMenuTitleWrapper>
        </div>
      </OfficesMenuWrapper>
    );
  }
}