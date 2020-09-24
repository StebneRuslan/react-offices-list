import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { OfficesList } from './OfficesList';
import { OfficesState } from '../../../redux/offices/reducer';
import actions from '../../../redux/offices/actions';

const mapStateToProps = (state: { office: OfficesState }) => ({
  errorMessage: state.office.errorMessage,
  showForm: state.office.showForm,
  isFetching: state.office.offices.isFetching,
  offices: state.office.offices.response
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    toggleNewOfficeForm: actions.toggleNewOfficeForm,
    getOfficeList: actions.getOfficeList,
    removeOffice: actions.removeOffice,
    createOffice: actions.createOffice
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(OfficesList)
