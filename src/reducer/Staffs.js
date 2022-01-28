import { STAFFS } from "../staffs";

const staffsLocal = JSON.parse(localStorage.getItem("staffs"));
const initialState = staffsLocal ? [...staffsLocal] : [...STAFFS];

function staffsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_STAFF":
      const newStaffs = [...state];
      const id = newStaffs.length;

      newStaffs.push(action.payload);
      newStaffs[newStaffs.length - 1].id = id;
      
      localStorage.setItem("staffs", JSON.stringify(newStaffs));
      console.log(newStaffs);
      return newStaffs;

    default:
      return state;
  }
}

export default staffsReducer;
