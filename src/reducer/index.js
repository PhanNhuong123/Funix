
import { combineReducers} from 'redux';
import departmentsReducer from './departments';
import { salaryReducer } from './salary';
import searchReducer from './search';
import staffsReducer from './Staffs';


const rootReducer = combineReducers({
  search: searchReducer,
  staffs: staffsReducer,
  departments: departmentsReducer,
  salary: salaryReducer
})

export default rootReducer