import React from "react";
import { Link, useParams } from "react-router-dom";


function StaffInfo(prop) {
  console.log(prop);
  return (
    <div className="wrapper__path">
      <Link to="/">Nhân viên</Link>
      <p>{prop.name}</p>
    </div>
  );
}
function HandleClickStaff() {
  let { id } = useParams();
  console.log(id);
 
  return <StaffInfo name={id} />
}
export default HandleClickStaff;
