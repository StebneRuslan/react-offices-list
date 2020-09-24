import React from 'react';
import { Component } from 'react';
import { OfficesMenu } from './offices-menu/OfficesMenu';
import { OfficesWrapper } from './elements';
import OfficesListContainer from './offices-list/OfficesListContainer';

export class Offices extends Component<any, any> {
  render() {
    return(
      <OfficesWrapper>
        <OfficesMenu />
        <OfficesListContainer />
      </OfficesWrapper>
    )}
}
