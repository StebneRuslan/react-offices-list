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
      ...this.state,
      offices: this.state.offices.concat(office)
    })
  }
  
  updateOffice(newOffice: any): void {
    debugger;
    const position = this.state.offices.findIndex((office: any) => office.id === newOffice.id);
    const editableOffice = Object.assign({}, { ...newOffice, editable: true });
    if (position > -1) {
      this.setState({ offices: Object.assign([], this.state.offices, { [position]: editableOffice }) })
    }
  }
  
  renderForm(): any {
    return this.state.showForm
      ? <OfficeForm saveOffice={this.addOffice.bind(this)} closeForm={this.handleFormState.bind(this)}/>
      : null;
  }
  
  renderEditableForm(index: number): any {
    return <OfficeForm key={index} editable={true} saveOffice={this.updateOffice.bind(this)} closeForm={this.handleFormState.bind(this)}/>
  }
  
  removeOffice(id: string): void {
    const position = this.state.offices.findIndex((office: any) => office.id === id);
    const newOffices = [...this.state.offices];
    newOffices.splice(position, 1);
    if (position > -1) {
      this.setState({ offices: newOffices })
    }
  }
  
  openEditForm(id: string): void {
    const position = this.state.offices.findIndex((office: any) => office.id === id);
    const editableOffice = Object.assign({}, { ...this.state.offices[position], editable: true });
    if (position > -1) {
      this.setState({ offices: Object.assign([], this.state.offices, { [position]: editableOffice }) })
    }
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
            return office.editable
              ? this.renderEditableForm(index)
              : <OfficeCard
              key={index}
              office={office}
              removeOffice={this.removeOffice.bind(this)}
              editOffice={this.openEditForm.bind(this)}
            />
          })}
        </OfficeCardsContainer>
        <OfficesFooter />
      </OfficesListWrapper>
    )
  }
}
