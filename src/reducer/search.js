import { STAFFS } from "../staffs";

const initialState = {
  staffs: [...STAFFS],
  activeId: null,
};

function searchReducer(state = initialState, action) {
  if (action.type === "SEARCH_SUBMIT") {
    const newList = [...action.payload];
    return {
      ...state,
      staffs: newList,
    };
  } else {
    return state;
  }
}

export default searchReducer;
