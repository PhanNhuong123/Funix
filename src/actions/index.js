import * as ActionType from "../contants/action-type";
import { baseURl } from "../Url/baseUrl";

const searchSubmit = (payload) => ({ type: ActionType.SUBMIT, payload });

export const postStaffs = (staffs) => (dispatch) => {
  fetch(baseURl + "staffs", {
    method: "POST",
    body: JSON.stringify(staffs),
    headers: {
      "Content-Type": "application/json",
    },

    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            "Error " + response.status + " : " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((response) => {
      
      dispatch(staffsAdd(response));
      dispatch(fetchSalary());
      dispatch(fetchDepartments());

    });
};

const addStaff = (payload) => ({ type: ActionType.ADD_STAFF, payload });

const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));
  fetch(baseURl + "staffs")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            "Error" + response.status + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => {
      dispatch(staffsAdd(response));
      // dispatch(staffs_department(departments));
    })

    .then()
    .catch((error) => dispatch(staffsFailed(error.message)));
};

const staffsLoading = () => ({
  type: ActionType.STAFFS_LOADING,
});

const staffsFailed = (errMess) => ({
  type: ActionType.STAFFS_FAILED,
  payload: errMess,
});

const staffsAdd = (staffs) => ({
  type: ActionType.ADD_STAFFS,
  payload: staffs,
});


export const fetchDepartments = () => (dispatch) => {
  dispatch(departmentsLoading(true));
  fetch(baseURl + "departments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            "Error" + response.status + " : " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addsDepartments(response)))
    .catch((errMess) => dispatch(departmentsFailed(errMess)));
};

export const departmentsLoading = () => ({
  type: ActionType.DEPARTMENTS_LOADING,
});
export const departmentsFailed = (errMess) => ({
  type: ActionType.DEPARTMENTS_FAILED,
  payload: errMess,
});
export const addsDepartments = (departments) => ({
  type: ActionType.ADD_DEPARTMENTS,
  payload: departments,
});

export const fetchSalary = () => (dispatch) => {
  dispatch(salaryLoading(true));
  fetch(baseURl + "staffsSalary")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            "Error " + response.status + " : " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addsSalary(response)))
    .catch((errMess) => dispatch(salaryFailed(errMess)));
};

export const salaryLoading = () => ({
  type: ActionType.SALARY_LOADING,
});
export const salaryFailed = (errMess) => ({
  type: ActionType.SALARY_FAILED,
  payload: errMess,
});
export const addsSalary = (salary) => ({
  type: ActionType.ADD_SALARY,
  payload: salary,
});



export {
  searchSubmit,
  addStaff,
  staffsFailed,
  staffsAdd,
  staffsLoading,
  fetchStaffs,
};
