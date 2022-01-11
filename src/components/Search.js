import React from "react";
import { STAFFS } from "../staffs";
import { useState} from 'react';
import Staff from "./staff";

function HandelClickSearchIcon() {
  let elememt = document.getElementsByClassName("search__input")[0];
  if (elememt.classList.contains("js_active-input")) {
    elememt.classList.remove("js_active-input");
  } else {
    elememt.classList.add("js_active-input");
  }
}


function fillterData(val) {
const staffs = STAFFS;
  console.log(val);
  const staffsSearch = staffs.filter(staff => staff.name === val);
  console.log(staffsSearch.length)
  if(staffsSearch.length === 1){
      console.log('co')
      return staffsSearch
  } else {
      console.log('khong co')
       return staffs}
};

function HandelRenderSearch(e) {
  const [staffs, setStaffs] = useState(STAFFS)
  if (e.target) {
    console.log(fillterData(e.target.value))
    setStaffs("set")
  };
  console.log(staffs)
  return <h1>heell</h1>
}

export { HandelClickSearchIcon };
export default HandelRenderSearch;
