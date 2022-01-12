import React from "react";
import { STAFFS } from "../staffs";
import { useState } from "react";
import Staff from "./staff";

var result = false


function HandelRenderSearch() {
  const [staffs, setStaffs] = useState(STAFFS);
  const handleChange = (e) => {
    result = false ;
    if (e.target) {
      const value = e.target.value;
      const search = staffs.filter((staff) => staff.name === value);
      document.getElementsByClassName('resutl')[0].style.display = "block"
      if (search.length !== 0) {
        result = !result;
        setStaffs(search);
    } else { setStaffs(STAFFS)}
    }
  };

  return (
    <div className="wrapper row">
        <label style={{fontSize : 'large', fontWeight: 'bold'}} for="search">Tìm kiếm nhân viên</label>
      <input
        id="search"
        type="text"
        className="search__input"
        onChange={(e) => handleChange(e)}
      />
     
      <p className="resutl" >
        <i>{(result && `Tìm thấy ${staffs.length} nhân viên`) || 'Không tìm thấy nhân viên'}</i>
      </p>
      <div className="wrapper__staffs">
        {staffs.map((staff) => (
          <Staff key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
}

export default HandelRenderSearch;
