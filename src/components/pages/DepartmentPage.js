import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DepartmentInfo = ({ prop }) => (
  <Link to={'/Department/' + prop.name} >
  <div className="department__info">
    <h4>{prop.name}</h4>
    <p>Số lượng nhân viên: {prop.numberOfStaff}</p>
  </div>
  </Link>
);

function Department() {
  const dpts =   useSelector(state => state.departments.departments)
  ;
  return (
    <div className="wrapper ">
      <div className="wrapper__departments row">
        {dpts.map((dpt) => (
          <div key={dpt.id} className="departments__department col-4 md-col-6  sm-col-12">
            <DepartmentInfo key={dpt.id} prop={dpt} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Department;
