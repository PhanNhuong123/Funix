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
    //add  department to staffs by departmentId
    case ActionType.STAFFS_DEPARTMENT:
      const newState = { ...state };
      const staffs = newState.staffs;
      console.log("staffs :  ",staffs);
      const departments = action.payload;
      console.log("payload : ", action.payload);
      addDepartments(staffs, departments);
      //add department
      function addDepartments(staffs, departments) {
        for (const staff of staffs) {
          const department = departments.filter(
            (department) => department.id === staff.departmentId
          );
          let index = staff.id - 1;
          staffs[index].department = department
          // console.log("department with staff : ",staffs[index], department);
        }
        newState.staffs = staffs;
        return { newState };
      }

      return { ...state };

    case ActionType.ADD_STAFF:
      return state;
    //
    //   const newStaffs = [...state];
    //   const id = newStaffs.length;

    //   newStaffs.push(action.payload);
    //   newStaffs[newStaffs.length - 1].id = id;

    //   localStorage.setItem("staffs", JSON.stringify(newStaffs));
    //   console.log(newStaffs);
    //   return newStaffs;

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
