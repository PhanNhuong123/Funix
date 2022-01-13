import React from "react";
import { DEPARTMENTS } from "../../staffs";

const DepartmentInfo = ({ prop }) => (
  <div className="department__info">
    <h4>{prop.name}</h4>
    <p>Số lượng nhân viên: {prop.numberOfStaff}</p>
  </div>
);

function Department() {
  const dpts = DEPARTMENTS;
  return (
    <div className="wrapper ">
      <div className="wrapper__departments row">
        {dpts.map((dpt) => (
          <div className="departments__department col-4 md-col-6  sm-col-12">
            <DepartmentInfo key={dpt.id} prop={dpt} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Department;
