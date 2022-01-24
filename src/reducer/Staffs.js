import { STAFFS } from "../staffs";

const initialState = [...STAFFS];
function staffsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_STAFF":
      return state;
    default:
      return state;
  }
}

export default staffsReducer;
