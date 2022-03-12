import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { falseAnimation } from "../actions";
import { baseURl } from "../Url/baseUrl";
import { override } from "./pages/StaffsPage";
import Staff from "./staff";

function DepartmentDetail() {
  const dispatch = useDispatch();
  dispatch(falseAnimation());
  let { name } = useParams();
  const departments = useSelector((state) => state.departments.departments);
  const department = departments.filter(
    (department) => department.name === name
  )[0];
  let [staffs, setStaffs] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(baseURl + "departments/" + department.id)
      .then(
        (response) => response,
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        setStaffs(response);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="Loading">
        <ClipLoader
          color={"#ffffff"}
          loading={isLoading}
          css={override}
          size={150}
        />
      </div>
    );
  }
    if (!staffs[0]) {
    console.log("hello")
    return (
      <div className="wrapper row">
        <div className="wrapper__path">
          <Link to="/departments">Phòng ban</Link>
          <p> / {name}</p>
        </div>

        
         Không có nhân viên nào trong phòng ban này !!!!
      
      </div>
    );
  } else
    return (
      <div className="wrapper row">
        <div className="wrapper__path">
          <Link to="/departments">Phòng ban</Link>
          <p> / {name}</p>
        </div>

        <div className="wrapper__staffs">
          {staffs.map((staff) => (
            <Staff staff={staff} />
          ))}
        </div>
      </div>
    );
}

export default DepartmentDetail;
