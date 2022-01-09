import React from "react";
import { Link } from "react-router-dom";


function StaffInfo(staff) {
  console.log(staff);
  return (
    <div className="wrapper__path">
      <Link to="/">Nhân viên</Link>
      <p></p>
    </div>
  );
}

function HandleClickStaff({prop}){
   console.log(prop)
   return <StaffInfo />
}
export default HandleClickStaff;
