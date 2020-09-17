import React from 'react';
import { FunctionComponent } from 'react';
import {
  OfficesMenuHeader,
  OfficesMenuWrapper,
  OfficeMenuTitleWrapper,
  OpenedMenuTitle,
  OpenedMenuWrapper
} from './elements';

import menuHeader from '../../../images/menu-header.svg';

export const OfficesMenu: FunctionComponent = () =>
<OfficesMenuWrapper>
  <OfficesMenuHeader>
    <img alt='menu-logo' src={menuHeader} />
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
