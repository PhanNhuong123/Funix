import { STAFFS } from "../staffs";

const initialState = [...STAFFS];
function staffsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_STAFF":
        console.log(action.type)
      return state
    default:
      return state;
  }
}

export default staffsReducer;
