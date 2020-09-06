import React, { Component } from 'react';
import { OfficesListWrapper, OfficeControlsContainer, OfficeCount, OfficeCardsContainer } from './styled';
import { OfficesTitle, OfficesTitleWrapper } from '../styled';
import { Description } from '../../shared/Description';
import { OfficesFooter } from '../offices-footer/OfficesFooter';
import { Button } from '../../shared/Button';
import { OfficeCard } from '../office-card/OfficeCard';
import { OfficeForm } from '../office-form/OfficeForm';

export class OfficesList extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showForm: false,
      offices: []
    };
  }
  
  handleFormState() {
    this.setState({ showForm: !this.state.showForm });
  }
  
  addOffice(office: any) {
    this.setState({
      ... this.state,
      offices: this.state.offices.concat(office)
    })
  }
  
  renderForm(): any {
    return this.state.showForm
      ? <OfficeForm addOffice={this.addOffice.bind(this)} closeForm={this.handleFormState.bind(this)}/>
      : null;
  }
  
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
            <Button white onClick={this.handleFormState.bind(this)}>Add New Office</Button>
            <OfficeCount>{this.state.offices.length} Offices</OfficeCount>
          </OfficeControlsContainer>
          {this.renderForm()}
          {this.state.offices.map((office: any, index: number) => {
            return <OfficeCard key={index} value={office}/>
          })}
        </OfficeCardsContainer>
        <OfficesFooter />
      </OfficesListWrapper>
    )
  }
}
