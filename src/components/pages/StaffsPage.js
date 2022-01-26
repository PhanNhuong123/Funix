import React from "react";
import { useSelector } from "react-redux";
import ModalAddStaff from "../ModalAddStaff.js";
import Staff from "../staff";
import { addStaff } from "../../actions/index.js";
import { HandleClickBtnAdd } from "../toggleModalBox.js";

// em thử lai bên modal kia nhé, bằng cách gọi lại cái props.addStaff và truyền vào values từ form xem có lỗi không nhé
// em ơi ping a qua hệ thông nhé

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addStaff: () => dispatch(HandleSubmitForm),
//   };
// };

function StaffsPage() {
  const staffs = useSelector((state) => state.staffs);
  return (
    <div className="wrapper row">
      <div className="title">
        <h3>Nhân viên</h3>
        <div className="btn-addStaff" onClick={HandleClickBtnAdd} >
          <i class="fas fa-plus-circle"></i>
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
