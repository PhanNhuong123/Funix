import React, { useState } from 'react';
import './App.css';
import StaFFList from './component/staffListComponent.js';
import {STAFFS} from './staffs.jsx';
import dateFormat, { masks } from "dateformat";
import {BrInfo} from './background'
function App() {
  const [infoStaff, setInfostaff] = useState('');
  const [BrImg, setBrImg] = useState({background: "url(https://previews.123rf.com/images/karenr/karenr1506/karenr150600055/41699857-gray-and-white-square-geometric-repeat-pattern-background-that-is-seamless-and-repeats.jpg)"})
  const HandleClick = props => {
   let ramdomBr = array => Math.floor(Math.random()*array.length)
   setBrImg(BrInfo[ramdomBr(BrInfo)])
   console.log(BrImg)
   setInfostaff(<div style={BrImg} className='info col-10'  >
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
      <div className='header' >Ứng dụng quản lý nhân sự v1.0</div>
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
