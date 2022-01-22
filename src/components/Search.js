import React from "react";
import { STAFFS } from "../staffs";
// import { useState } from "react";
// import Staff from "./staff";
import { useSelector, useDispatch } from "react-redux";
import {searchSubmuit} from "../actions/index";
// import store from "../store";
import SearchRender from "./pages/SearchRender";

var mess = true;
function HandelRenderSearch() {
  console.log("render");
  const dispatch = useDispatch();
  const staffs = useSelector((state) => state.search.staffs);
  const filter = (searchValue) => {
    const result = STAFFS.filter((staff) => staff.name === searchValue);
    return result;
  };
  
  function handleSubmit() {
    const inputElement = document.querySelector("#search");
    const resultElement = document.querySelector(".result");
    const searchResult = filter(inputElement.value);
    console.log(searchResult.length);
    if (searchResult.length !== 0) {
      mess = true;
    } else {
      mess = false;
    }
    resultElement.style.display = "block";
    dispatch(searchSubmuit(searchResult));
  }

  return (
    <div className="wrapper row">
      <label style={{ fontSize: "large", fontWeight: "bold" }} htmlFor="search">
        Tìm kiếm nhân viên
      </label>
      <input
        id="search"
        type="text"
        placeholder="Nhập họ và tên..."
        className="search__input"
        
        // onChange={(e) => handleChange(e)}
      />
      <button className="search__btn" onClick={() => handleSubmit()}>Search</button>

      <p className="result">
        <i>
          {(mess && `Tìm thấy ${staffs.length} nhân viên`) ||
            "Không tìm thấy nhân viên"}
        </i>
      </p>
      <SearchRender staffs={staffs} />
    </div>
  );
}

export default HandelRenderSearch;
