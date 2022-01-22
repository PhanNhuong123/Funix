
import { combineReducers} from 'redux';
import searchReducer from './search';
import staffsReducer from './Staffs';


const rootReducer = combineReducers({
  search: searchReducer,
  staffs: staffsReducer
})

export default rootReducer