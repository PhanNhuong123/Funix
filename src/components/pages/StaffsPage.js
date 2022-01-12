import React from "react";
import { ReactDOM } from "react";
import { useState, useEffect } from "react";
import { STAFFS } from "../../staffs.jsx";
import Staff from "../staff";


const search = []
function StaffsPage() {
  const staffs =STAFFS;
 
  return (
    <div className="wrapper row">
      <div className="wrapper__staffs">
        {staffs.map((staff) => (
          <Staff key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
}
export default StaffsPage;
