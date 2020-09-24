import React, { useEffect } from 'react';
// components
import { OfficesFooter } from '../offices-footer/OfficesFooter';

// containers
import OfficeCardContainer from '../office-card/OfficeCardContainer';
import OfficeFormContainer from '../office-form/OfficeFormContainer';

// styled
import { OfficesListWrapper, OfficeControlsContainer, OfficeCount, OfficeCardsContainer } from './elements';
import { OfficesTitle, OfficesTitleWrapper } from '../elements';
import { Description } from '../../shared/Description';
import { Button } from '../../shared/Button';
import { Spinner } from '../../shared/Loader';

// models
import { OfficeModel } from '../../../models/office.model';

interface OfficesListInterface {
  isFetching: boolean;
  toggleNewOfficeForm: () => void;
  getOfficeList: () => void;
  offices: OfficeModel[];
  showForm: boolean;
}

export function OfficesList({ isFetching, toggleNewOfficeForm, getOfficeList, offices, showForm }: OfficesListInterface) {
  useEffect(() => {
    getOfficeList();
  }, [getOfficeList]);
  
  return (
    <OfficesListWrapper>
      {isFetching && <Spinner/>}
      <OfficesTitleWrapper>
        <OfficesTitle>OFFICES</OfficesTitle>
        <OfficesTitle disabled>COMPANY INFO</OfficesTitle>
      </OfficesTitleWrapper>
      <Description>
        Updating your location and contact information helps you appeal to regional investors and service providers.
      </Description>
      <OfficeCardsContainer>
        <OfficeControlsContainer>
          <Button white onClick={toggleNewOfficeForm}>Add New Office</Button>
          <OfficeCount>{offices.length} Offices</OfficeCount>
        </OfficeControlsContainer>
        {showForm && <OfficeFormContainer name='' />}
        {offices.map((office: any, index: number) => {
          return office.editable
            ? <OfficeFormContainer key={index} name={office.name} office={office}/>
            : <OfficeCardContainer key={index} office={office}
          />
        })}
      </OfficeCardsContainer>
      <OfficesFooter />
    </OfficesListWrapper>
  )
}
