import React from "react";
import { useState } from "react";
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
  let sortResult = STAFFS;
  const [staffs, setStaffs] = useState(STAFFS);
  const SortData = (selec) => {
    for (let i = 0; i < sortResult.length; i++) {
      sortResult[i].salary = salaryVal(
        sortResult[i].overTime,
        sortResult[i].salaryScale
      );
    }
    if (selec === "id") {
      for (let i = 0; i < sortResult.length; i++) {
        for (let j = i + 1; j < sortResult.length; j++) {
          if (sortResult[i].id <= sortResult[j].id) {
            let max = sortResult[j];
            sortResult[j] = sortResult[i];
            sortResult[i] = max;

          }
        }
      };
   
    } else {
      for (let i = 0; i < sortResult.length; i++) {
        for (let j = i + 1; j < sortResult.length; j++) {
          if (sortResult[i].salary <= sortResult[j].salary) {
            let max = sortResult[j];
            sortResult[j] = sortResult[i];
            sortResult[i] = max;
          }
        }
      };
      
    }
    return  sortResult
  };
  
  // useEffect(()=> {
  //   setStaffs(sortResult)
  // },[sortResult]);
  const handleClickSortProp = (e) => {
   
    const element = e.target;
    if (element.innerHTML === "Lương") {
      element.innerHTML = "Id";
      setStaffs(SortData("id"));
      console.log(staffs)
    } else {
      element.innerHTML = "Lương";
      setStaffs(SortData("salary"));
      console.log(staffs)

    }
  };
  const basicSalary = 3000000;
  const overTimeSalary = 200000;
  const salaryVal = (overTime, salaryScale) =>
    (basicSalary * salaryScale + overTimeSalary * overTime).toFixed(0);

  return (
    <div className="wrapper row">
      <ul className="wrapper__sorts">
        <li className="sort__label">Sort: </li>
        <li className="sort__selec" onClick={(e) => handleClickSortProp(e)}>
          Lương
        </li>
        <li className="sort__selec">
          <i className="fas fa-sort-alpha-down-alt"></i>
        </li>
      </ul>
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
