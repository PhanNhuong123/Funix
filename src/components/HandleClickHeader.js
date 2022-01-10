import { ReactDOM } from "react";

function handleClick(e) {
  let entrys = document.getElementsByClassName("js_entry");
  for (const entry of entrys) {
    if (!entry.classList.contains("js_non-active")) {
      entry.classList.add("js_non-active");
    }
  }
  if (e === "staff") {
    entrys[0].classList.remove("js_non-active");
  } else if (e === "salary") {
    entrys[2].classList.remove("js_non-active");
  } else {
    entrys[1].classList.remove("js_non-active");
  }
}
export default handleClick;
