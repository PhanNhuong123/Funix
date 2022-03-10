import * as ActionType from "../contants/action-type";

const initialState = {
  isLoading: false,
  errMess: null,
  departments: [],
};

export default function departmentsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.ADD_DEPARTMENTS:
      return { ...state, isLoading: false, departments: action.payload };

    case ActionType.DEPARTMENTS_LOADING:
      return { ...state, isLoading: true, departments: [] };

    case ActionType.DEPARTMENTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
     return state
  }
}
