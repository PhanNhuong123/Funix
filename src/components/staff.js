import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDeleteStaff } from "../actions";

const Staff = ({ staff }) => {
  const dispatch = useDispatch()
  return (
    <React.Fragment>
      <div className="staff col-2 md-col-4 sm-col-6">
        <div className="btn-deleteStaff" onClick={() => dispatch(fetchDeleteStaff(staff.id))}>
          <i class="fas fa-trash-alt"></i>
        </div>
        <Link to={"/staffinfo/" + staff.id}>
          <div className="staff"></div>
          <div className="staff__content">
            <img src={require("../images/alberto.png")} alt={staff.name} />
            <p className="staff__content__staff-name">
              <b>{staff.name}</b>
            </p>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Staff;
