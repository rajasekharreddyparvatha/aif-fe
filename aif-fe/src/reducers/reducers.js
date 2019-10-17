/**
 * Created by rajasekhar on 27-Sep-18.
 */

import { combineReducers } from 'redux';
import commonReducer from '../containers/common/reducer'
import AIFContainer from '../containers/AIFContainer/reducers'
export default combineReducers({AIFContainer, commonReducer})