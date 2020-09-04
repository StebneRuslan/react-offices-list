import React, { Component } from 'react';
import { OfficesListWrapper, OfficeControlsContainer, OfficeCount, OfficeCardsContainer } from './styled';
import { OfficesTitle, OfficesTitleWrapper } from '../styled';
import { Description } from '../../shared/Description';
import { OfficesFooter } from '../offices-footer/OfficesFooter';
import { Button } from '../../shared/Button';
import { OfficeCard } from '../office-card/OfficeCard';

export class OfficesList extends Component<any, any> {
  render() {
    return (
      <OfficesListWrapper>
        <OfficesTitleWrapper>
          <OfficesTitle>OFFICES</OfficesTitle>
          <OfficesTitle disabled>COMPANY INFO</OfficesTitle>
        </OfficesTitleWrapper>
        <Description>Updating your location and contact information helps you appeal to regional investors and service providers.</Description>
        <OfficeCardsContainer>
          <OfficeControlsContainer>
            <Button white>Add New Office</Button>
            <OfficeCount>1 Offices</OfficeCount>
          </OfficeControlsContainer>
          <OfficeCard />
          <OfficeCard />
          <OfficeCard />
          <OfficeCard />
        </OfficeCardsContainer>
        <OfficesFooter />
      </OfficesListWrapper>
    )
  }
}
