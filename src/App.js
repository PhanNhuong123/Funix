import React, { useState } from 'react';
import './App.css';
import StaFFList from './component/staffListComponent.js';
import {STAFFS} from './staffs.jsx';
import dateFormat, { masks } from "dateformat";
import {BrInfo} from './background'

const btnLayOut = document.getElementsByClassName('layoutBtn')[0];
console.log(btnLayOut)

if(btnLayOut !== undefined){
btnLayOut.addEventListener('onClick' ,handleClick())
console.log(btnLayOut)

}
function handleClick(){
  const staffs = document.getElementsByClassName['staff-name']
  console.log(staffs)
  
 for (const staff in staffs){
   if (staff.classList.contains('col-4')){
         staff.classList.remove('col-4')
         staff.classList.add('col-6')
   }
 }
}

function App() {
  const ramdomBr = array => Math.floor(Math.random()*array.length)
  const [infoStaff, setInfostaff] = useState('');
  const [BrImg, setBrImg] = useState(BrInfo[ramdomBr(BrInfo)])
  const HandleClick = props => {
  setBrImg(BrInfo[ramdomBr(BrInfo)])
  setInfostaff(
    <div style={BrImg} className='info col-10'  >
      <h1>Họ và tên: {props.name}</h1>
       <p>Ngày sinh: {dateFormat(props.doB,"mm/dd/yyyy")}</p>
       <p>Ngày vào công ty: {dateFormat(props.startDate,"mm/dd/yyyy")}</p>
       <p>Phòng ban: {props.department.name}</p>
       <p>Số ngày nghỉ còn lại: {props.annualLeave}</p>
       <p>Số ngày đã làm thêm: {props.overTime}</p>
    </div>)
  }
 const ListInfo = props => infoStaff
  
  return (
    <div className='wrapper'>
      <div className='header' >
        <h1>Ứng dụng quản lý nhân sự v1.0</h1>
        <button className='layoutBtn'>Layout</button>
      </div>
      <div className='body row' >
        <ul>
          {STAFFS.map( staff => (
            <StaFFList 
            key={staff.id}
            props={staff}
            br={BrImg}
            onClick={HandleClick}
            />
          ))}
        </ul>
        <ListInfo />
      </div>
    </div> 
  );
}

export default App;
