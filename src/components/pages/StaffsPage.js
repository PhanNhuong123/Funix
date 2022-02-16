import React from "react";
import { useSelector } from "react-redux";
import ModalAddStaff from "../ModalAddStaff.js";
import Staff from "../staff";
import { addStaff } from "../../actions/index.js";
import { HandleClickBtnAdd } from "../toggleModalBox.js";


function StaffsPage() {
  const staffs = useSelector((state) => state.staffs);
  return (
    <div className="wrapper row">
      <div className="title">
        <h3>Nhân viên</h3>
        <div className="btn-addStaff" onClick={HandleClickBtnAdd} >
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
      <ModalAddStaff addStaff={addStaff} />
      <div className="wrapper__staffs">
        {staffs.map((staff) => (
          <Staff key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
}
export default /*connect(mapDispatchToProps)*/ StaffsPage;
