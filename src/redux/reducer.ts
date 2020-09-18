import { combineReducers } from 'redux';

import offices from './offices/reducer'

export default combineReducers({
  office: offices
})
