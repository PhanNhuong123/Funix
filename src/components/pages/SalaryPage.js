import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { falseAnimation, fetchSalary } from "../../actions";

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
  const dispatch = useDispatch();
  dispatch(falseAnimation())
  const listStaffs = useSelector(state => state.salary.salary);
  const [staffs, setStaffs] = useState(listStaffs);
 
  //hàm sắp xếp dữ liệu theo điều kiện của người dùng 
  const SortData = () => {
    let sortResult = [...listStaffs];

    for (let i = 0; i < sortResult.length; i++) {
      sortResult[i].salary = salaryVal(
        sortResult[i].overTime,
        sortResult[i].salaryScale
      );
    }

    const icon = document.getElementsByClassName("sort__selec-sort")[0];
    icon.style.display = "inline";
    const select =
      document.getElementsByClassName("sort__selec-choose")[0].innerHTML;
    if (icon.innerHTML === '<i class="fas fa-sort-alpha-up-alt"></i>') {
      if (select === "Id") {
        for (let i = 0; i < sortResult.length; i++) {
          for (let j = i + 1; j < sortResult.length; j++) {
            if (sortResult[i].id >= sortResult[j].id) {
              let max = sortResult[j];
              sortResult[j] = sortResult[i];
              sortResult[i] = max;
            }
          }
        }
      } else {
        for (let i = 0; i < sortResult.length; i++) {
          for (let j = i + 1; j < sortResult.length; j++) {
            if (sortResult[i].salary >= sortResult[j].salary) {
              let max = sortResult[j];
              sortResult[j] = sortResult[i];
              sortResult[i] = max;
            }
          }
        }
      }
    } else {
      

      if (select === "Id") {
        for (let i = 0; i < sortResult.length; i++) {
          for (let j = i + 1; j < sortResult.length; j++) {
            if (sortResult[i].id <= sortResult[j].id) {
              let max = sortResult[j];
              sortResult[j] = sortResult[i];
              sortResult[i] = max;
            }
          }
        }
      } else {
        for (let i = 0; i < sortResult.length; i++) {
          for (let j = i + 1; j < sortResult.length; j++) {
            if (sortResult[i].salary <= sortResult[j].salary) {
              let max = sortResult[j];
              sortResult[j] = sortResult[i];
              sortResult[i] = max;
            }
          }
        }
      }
    }

    setStaffs(sortResult);
  };
//hết

// hàm lắng nghe và lấy điều kiện sắp xếp khi người dùng 
//click thay đổi điều kiện sau đó gọi hàm sắp xếp dữ liêu
  const handleClickSort = () => {
    const icon = document.getElementsByClassName("sort__selec-sort")[0];
    if (icon.innerHTML === '<i class="fas fa-sort-alpha-up-alt"></i>') {
      icon.innerHTML = '<i class="fas fa-sort-alpha-down-alt"></i>';
      SortData();
    } else {
      icon.innerHTML = '<i class="fas fa-sort-alpha-up-alt"></i>';
      SortData();
    }
  };
  const handleClickSortProp = (e) => {
    const select = e.target;

    if (select.innerHTML === "Lương") {
      select.innerHTML = "Id";
      SortData();
    } else {
      select.innerHTML = "Lương";
      SortData();
    }
  };
  // hết 
  const basicSalary = 3000000;
  const overTimeSalary = 200000;
  const salaryVal = (overTime, salaryScale) =>
    (basicSalary * salaryScale + overTimeSalary * overTime).toFixed(0);

  return (
    <div  className="wrapper row">
      <div className="title" ><h3>Bảng Lương</h3></div>
      <ul  className="wrapper__sorts">
        <li  className="sort__label">Sort: </li>
        <li
          className="sort__selec-choose sort__selec"
          onClick={(e) => handleClickSortProp(e)}
        >
          Id
        </li>
        <li
          className="sort__selec sort__selec-sort"
          onClick={() => handleClickSort()}
        >
          <i className="fas fa-sort-alpha-up-alt"></i>
        </li>
      </ul>
      <div className="wrapper__salarys ">
        {staffs.map((staff) => (
          <div key={staff.id} className="salarys__salary col-4 md-col-6 sm-col-12">
            <SalaryInfo key={staff.id} staff={staff} salary={salaryVal} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Salary;
