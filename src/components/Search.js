import React from "react";
import { STAFFS } from "../staffs";
// import { useState } from "react";
// import Staff from "./staff";
import { useSelector, useDispatch } from "react-redux";
import searchSubmuit from "../actions/index";
// import store from "../store";
import SearchRender from "./pages/SearchRender";


function HandelRenderSearch() {
  let mess = true
  console.log('render');
  const dispatch = useDispatch();
  const staffs = useSelector(state => state.search.staffs);
  console.log(staffs);

  const filter = searchValue => {
    const result = STAFFS.filter(staff => staff.name === searchValue);
    return result
  };

  function handleSubmit() {
    const inputElement = document.querySelector("#search");
    const searchResult = filter(inputElement.value);
    if(searchResult.length === 0 )
    {mess = false} else {
      mess = true
    }
    const resultElement = document.querySelector('.result')
    resultElement.style.display = 'block'
    dispatch(searchSubmuit(searchResult));
  };
  
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
      <button onClick={() => handleSubmit()}>Search</button>

      <p className="result">
        <i>
          {( mess && `Tìm thấy ${staffs.length} nhân viên`) ||
            "Không tìm thấy nhân viên"}
        </i>
      </p>
     <SearchRender staffs={staffs} />
    </div>
  );
};

export default HandelRenderSearch;
