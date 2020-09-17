import React from 'react';
import { Component } from 'react';
import { OfficesMenu } from './offices-menu/OfficesMenu';
import { OfficesWrapper } from './elements';
import { OfficesList } from './offices-list/OfficesList';

export class Offices extends Component<any, any> {
  render() {
    return(
      <OfficesWrapper>
        <OfficesMenu />
        <OfficesList />
      </OfficesWrapper>
    )}
}
