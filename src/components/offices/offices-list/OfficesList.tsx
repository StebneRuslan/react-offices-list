import React, { Component } from 'react';
import { OfficesListWrapper, OfficeControlsContainer, OfficeCount, OfficeCardsContainer } from './elements';
import { OfficesTitle, OfficesTitleWrapper } from '../elements';
import { Description } from '../../shared/Description';
import { OfficesFooter } from '../offices-footer/OfficesFooter';
import { Button } from '../../shared/Button';
import { OfficeCard } from '../office-card/OfficeCard';
import { OfficeForm } from '../office-form/OfficeForm';
import { OfficeModel } from '../../../models/office.model';

export class OfficesList extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showForm: false,
      offices: []
    };
  }
  
  componentDidMount(): void {
    this.props.getOfficeList();
  }
  
  handleFormState() {
    this.setState({showForm: !this.state.showForm });
  }
  
  addOffice(office: OfficeModel) {
    this.props.createOffice(office);
    this.setState({ showForm: false })
  }
  
  updateOffice(newOffice: OfficeModel): void {
    const position = this.state.offices.findIndex((office: any) => office.name === newOffice.name);
    const editableOffice = Object.assign({}, { ...newOffice });
    if (position > -1) {
      this.setState({
        offices: Object.assign([], this.state.offices, { [position]: editableOffice })
      })
    }
  }
  
  renderNewForm(): any {
    return this.state.showForm
      ? <OfficeForm
        saveOffice={this.addOffice.bind(this)}
        closeForm={this.handleFormState.bind(this)}
      />
      : null;
  }
  
  renderEditableForm(office: OfficeModel, index: number): any {
    return <OfficeForm
      key={index}
      editable={true}
      saveOffice={this.updateOffice.bind(this)}
      closeForm={this.handleEditForm.bind(this)}
      office={office}
    />
  }
  
  removeOffice(name: string): void {
    this.props.removeOffice(name);
  }
  
  handleEditForm(name: string, editable: boolean): void {
    const position = this.state.offices.findIndex((office: any) => office.name === name);
    const editableOffice = Object.assign({}, { ...this.state.offices[position], editable });
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
          {this.renderNewForm()}
          {this.props.offices.map((office: any, index: number) => {
            return office.editable
              ? this.renderEditableForm(office, index)
              : <OfficeCard
              key={index}
              office={office}
              removeOffice={this.removeOffice.bind(this)}
              editOffice={this.handleEditForm.bind(this)}
            />
          })}
        </OfficeCardsContainer>
        <OfficesFooter />
      </OfficesListWrapper>
    )
  }
}
