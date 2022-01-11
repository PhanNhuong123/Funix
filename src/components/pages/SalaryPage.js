import React from "react";
import { useState, useEffect} from 'react'
import { STAFFS } from "../../staffs";

const SalaryInfo = ({ staff, salary }) => (
  <div className="salary__content">
    <h4>{staff.name}</h4>
    <p>Mã nhân viên: {staff.id}</p>
    <p>Hệ số lương: {staff.salaryScale}</p>
    <p>Số giờ làm thêm: {staff.overTime}</p>
    <div className="salary__content-value">
      <p>Lương: {salary(staff.overTime, staff.salaryScale)}</p>
    </div>
  </div>
);

function Salary() {
  const staffs = STAFFS;
  const basicSalary = 3000000;
  const overTimeSalary = 200000;
  const salaryVal = (overTime, salaryScale) =>
    (basicSalary * salaryScale + overTimeSalary * overTime).toFixed(0);

  return (
    <div className="wrapper row">
      <div className="wrapper__salarys ">
        {staffs.map((staff) => (
          <div className="salarys__salary col-4">
            <SalaryInfo key={staff.id} staff={staff} salary={salaryVal} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Salary;
