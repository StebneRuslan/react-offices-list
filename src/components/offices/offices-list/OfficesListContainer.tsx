import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { OfficesList } from './OfficesList';
import { OfficesState } from '../../../redux/offices/reducer';
import actions from '../../../redux/offices/actions';

const mapStateToProps = (state: { office: OfficesState }) => ({
  errorMessage: state.office.errorMessage
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    getOfficeList: actions.getOfficeList
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(OfficesList)