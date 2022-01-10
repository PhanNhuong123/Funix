import React from "react";
import { DEPARTMENTS } from "../../staffs";

function Department() {
  const dpts = DEPARTMENTS;
  return (
    <div className="wrapper ">
      <div className="wrapper__departments row">
        {dpts.map((dpt) => (
          <div className="departments__department col-4">
            <div className="department__info">
              <h4>{dpt.name}</h4>
              <p>Số lượng nhân viên: {dpt.numberOfStaff}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Department;
