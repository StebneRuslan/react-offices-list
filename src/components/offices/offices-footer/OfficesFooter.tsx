import React, { FunctionComponent } from 'react';
import { OfficesFooterControl, OfficesFooterWrapper } from './styled';
import { Button } from '../../shared/Button';

export const OfficesFooter: FunctionComponent = () =>
  <OfficesFooterWrapper>
    <OfficesFooterControl>
      <Button white>Back</Button>
      <Button white withoutBorders>Provide additional comments</Button>
    </OfficesFooterControl>
    <OfficesFooterControl>
      <Button white>Skip this step</Button>
      <Button blue>Continue</Button>
    </OfficesFooterControl>
  </OfficesFooterWrapper>;
