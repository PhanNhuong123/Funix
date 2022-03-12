import { ReactDOM } from "react";
import { useDispatch } from "react-redux";

function handleClick(e) {
  
  let entrys = document.getElementsByClassName("js_entry");
  for (const entry of entrys) {
    if (!entry.classList.contains("js_opa")) {
      entry.classList.add("js_opa");
    }
  }
  if (e === "staffs") {
    entrys[0].classList.remove("js_opa");
  } else if (e === "salary") {
    entrys[2].classList.remove("js_opa");
  } else {
    entrys[1].classList.remove("js_opa");
  }
}
export default handleClick;
