import './App.css';
import StaFFList from './component/staffListComponent.js';
import {STAFFS} from './staffs.jsx';

function App() {
  //console.log(STAFFS)
  
  return (
    <div id='wrapper'>
      <div id='header' >Ứng dụng quản lý nhân sự v1.0</div>
      <div id='body' >
        <ul>
          {STAFFS.map( staff => (
            <StaFFList 
            key={staff.id}
            name={staff.name} />
          ))}
        </ul>
      </div>
    </div> 
  );
}

export default App;
