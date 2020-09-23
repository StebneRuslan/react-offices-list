import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { OfficeForm } from './OfficeForm';
import actions from '../../../redux/offices/actions';

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    createOffice: actions.createOffice,
    updateOffice: actions.updateOffice,
    closeNewOfficeForm: actions.toggleNewOfficeForm,
    toggleEditableOfficeForm: actions.toggleEditableOfficeForm
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(OfficeForm)
