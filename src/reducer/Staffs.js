import { useDispatch } from "react-redux";
import { fetchStaffs } from "../actions/index.js";
import * as ActionType from "../contants/action-type.js";
import { baseURl } from "../Url/baseUrl";

const initialState = {
  isLoading: false,
  errMess: null,
  staffs: [],
};

function staffsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.STAFFS_LOADING:
      return { ...state, isLoading: true, staffs: [] };

    case ActionType.ADD_STAFFS:
      return { ...state, isLoading: false, staffs: action.payload };

    case ActionType.STAFFS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
}

export default staffsReducer;
