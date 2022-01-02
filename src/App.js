import React, { useState } from 'react';
import './App.css';
import StaFFList from './component/staffListComponent.js';
import {STAFFS} from './staffs.jsx';
import dateFormat, { masks } from "dateformat";

function App() {
  const [infoStaff, setInfostaff] = useState('');
  const HandleClick = props => {
    setInfostaff(<div className='info'>
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
