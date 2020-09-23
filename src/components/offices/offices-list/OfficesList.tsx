import React, { Component } from 'react';
import { OfficesListWrapper, OfficeControlsContainer, OfficeCount, OfficeCardsContainer } from './elements';
import { OfficesTitle, OfficesTitleWrapper } from '../elements';
import { Description } from '../../shared/Description';
import { OfficesFooter } from '../offices-footer/OfficesFooter';
import { Button } from '../../shared/Button';
import { OfficeModel } from '../../../models/office.model';
import OfficeFormContainer from '../office-form/OfficeFormContainer';
import OfficeCardContainer from '../office-card/OfficeCardContainer';
import { Spinner } from '../../shared/Loader';

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
  
  renderNewForm(): any {
    return this.props.showForm ? <OfficeFormContainer name='' /> : null;
  }
  
  renderEditableForm(office: OfficeModel, index: number): any {
    return <OfficeFormContainer key={index} name={office.name} office={office}/>
  }
  
  handleSpinner() {
    return this.props.isFetching ? <Spinner/> : null;
  }
  
  render() {
    return (
      <OfficesListWrapper>
        {this.handleSpinner()}
        <OfficesTitleWrapper>
          <OfficesTitle>OFFICES</OfficesTitle>
          <OfficesTitle disabled>COMPANY INFO</OfficesTitle>
        </OfficesTitleWrapper>
        <Description>Updating your location and contact information helps you appeal to regional investors and service providers.</Description>
        <OfficeCardsContainer>
          <OfficeControlsContainer>
            <Button white onClick={this.props.toggleNewOfficeForm}>Add New Office</Button>
            <OfficeCount>{this.state.offices.length} Offices</OfficeCount>
          </OfficeControlsContainer>
          {this.renderNewForm()}
          {this.props.offices.map((office: any, index: number) => {
            return office.editable
              ? this.renderEditableForm(office, index)
              : <OfficeCardContainer key={index} office={office}
            />
          })}
        </OfficeCardsContainer>
        <OfficesFooter />
      </OfficesListWrapper>
    )
  }
}
