function HandleClickBtnClose() {
  const box_modal = document.querySelector(".box_modal");
  console.log(box_modal);
  if (!box_modal) return;

  box_modal.style = "display: none";
}

function HandleClickBtnAdd() {
  const box_modal = document.querySelector(".box_modal");
  console.log(box_modal);
  if (!box_modal) return;
  box_modal.style.display = "block";
}

export { HandleClickBtnClose, HandleClickBtnAdd };
