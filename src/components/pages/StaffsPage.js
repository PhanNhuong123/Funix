import React from "react";
import { useSelector } from "react-redux";
import ModalAddStaff from "../ModalAddStaff.js";
import Staff from "../staff";


function StaffsPage() {
 
  const staffs = useSelector(state => state.staffs);
  return (
    <div className="wrapper row">
      <ModalAddStaff/>
      <div className="wrapper__staffs">
        {staffs.map((staff) => (
          <Staff key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
}
export default StaffsPage;
