import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { OfficeCard } from './OfficeCard';
import actions from '../../../redux/offices/actions';

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    removeOffice: actions.removeOffice,
    toggleEditableOfficeForm: actions.toggleEditableOfficeForm
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(OfficeCard)
