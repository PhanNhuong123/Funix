import React from "react";
import { STAFFS } from "../staffs";
// import { useState } from "react";
// import Staff from "./staff";
import { useSelector, useDispatch } from "react-redux";
import { searchSubmit as searchSubmit } from "../actions/index";
// import store from "../store";
import SearchRender from "./pages/SearchRender";

var mess = true;
function HandelRenderSearch() {
  console.log("render");
  const dispatch = useDispatch();
  const staffs = useSelector((state) => state.staffs.staffs);
  const staffsSearch = useSelector( state => state.search.staffs)


  const filter = (searchValue) => {
    const result = staffs.filter((staff) => staff.name === searchValue);
    return result;
  };

  function handleSubmit() {
    const inputElement = document.querySelector("#search");
    const resultElement = document.querySelector(".result");
    const searchResult = filter(inputElement.value);
    console.log(searchResult);
    if (searchResult.length !== 0) {
      mess = true;
    } else {
      mess = false;
    }
    resultElement.style.display = "block";
    dispatch(searchSubmit(searchResult));
  }

  return (
    <div className="wrapper row">
      <label style={{ fontSize: "large", fontWeight: "bold" }} htmlFor="search">
        Tìm kiếm
      </label>
      <input
        id="search"
        type="text"
        placeholder="Nhập họ và tên..."
        className="search__input"
      />
      <button className="search__btn" onClick={() => handleSubmit()}>
        Search
      </button>

      <p className="result">
        <i>
          {(mess && `Tìm thấy ${staffsSearch.length} nhân viên`) ||
            "Không tìm thấy nhân viên"}
        </i>
      </p>
      <SearchRender staffs={staffsSearch} />
    </div>
  );
}

export default HandelRenderSearch;
