import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { baseURl } from "../Url/baseUrl";
import { override } from "./pages/StaffsPage";
import Staff from "./staff";

function DepartmentDetail() {
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
  return (
    <div className="wrapper row">
      <div className="title">
        <h3>Phòng Ban</h3>
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
