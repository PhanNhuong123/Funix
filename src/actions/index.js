import {
  SUBMIT,
  ADD,
  STAFF_LOADING,
  STAFF_FAILED,
  ADD_STAFF,
} from "../contants/action-type";

const searchSubmit = (payload) => ({ type: SUBMIT, payload });

const addStaff = (payload) => ({ type: ADD, payload });

const staffsLoading = (payload) => ({
  type: STAFF_LOADING,
  payload,
});

const staffsFailed = (payload) => ({
  type: STAFF_FAILED,
  payload,
});

const staffAdd = (payload) => ({
  type: ADD_STAFF,
  payload,
});

export { searchSubmit, addStaff, staffsFailed, staffAdd , staffsLoading };
