import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalAddStaff from "../ModalAddStaff.js";
import Staff from "../staff";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  addStaff, falseAnimation
} from "../../actions/index.js";
import { HandleClickBtnAdd } from "../toggleModalBox.js";
import { toggleDelete } from "../Delete.js";
import { CSSTransition } from "react-transition-group";

export const override = css`
  display: block;
  margin: 0 auto;
  border-color: #5ac8fa;
`;

function StaffsPage() {
  const [ inProp, setInProp] = useState(false)
 const dispatch = useDispatch();
  dispatch(falseAnimation())
  const staffs = useSelector((state) => state.staffs.staffs);
  const departments = useSelector((state) => state.departments.departments);
  const staffsLoading = useSelector((state) => state.staffs.isLoading);
  console.log(" state departments: ", departments);

  if (staffsLoading) {
    return (
      <div className="Loading">
        <ClipLoader
          color={"#ffffff"}
          loading={staffsLoading}
          css={override}
          size={150}
        />
      </div>
    );
  } else
    return (
      <div className="wrapper row">
        <div className="title">
          <h3>Nhân viên</h3>
          <div className="btn-addStaff" onClick={() => {HandleClickBtnAdd() ; setInProp(!inProp)}}>
            <i className="fas fa-plus-circle"></i>
          </div>
          <div className="btn-delete" onClick={toggleDelete}>
          <i class="fas fa-minus-circle"></i>
          </div>
        </div>
        <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <div>
        <ModalAddStaff addStaff={addStaff} />
        </div>
      </CSSTransition>
        <div className="wrapper__staffs">
          {staffs.map((staff) => (
            <Staff key={staff.id} staff={staff} />
          ))}
        </div>
      </div>
    );
}
export default StaffsPage;
