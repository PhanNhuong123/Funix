import React from "react";
import { Link } from "react-router-dom";


function HandleClickStaff(prop) {
  console.log(prop);

  return (
    <div className="wrapper__path">
      <Link to="/">Nhân viên</Link>
      <p>hello</p>
    </div>
  );
}
export default HandleClickStaff;
