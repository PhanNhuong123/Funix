import React from "react";
import { Link } from "react-router-dom";


function StaffInfo(prop){
  console.log(prop )
  return (
    <div className="wrapper__path">
      <Link to="/">Nhân viên</Link>
      <p>{prop.name}</p>
    </div>
  )
};
function HandleClickStaff(staff){
  console.log(staff);
  console.log(staff.name);
  return (<StaffInfo name={staff.name} />)
}
export default HandleClickStaff;
