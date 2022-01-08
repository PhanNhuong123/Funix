import react from "react";
import "./App.css";
import Staff from "./components/staff";
import { STAFFS } from "./staffs";
function App() {
  const handleClickStaff = (prop) => {
    console.log(prop);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ứng dụng quản lý nhân sự</h1>
      </header>
      <div className="wrapper row">
        <div className="wrapper__staffs">
          {STAFFS.map((staff) => (
            <Staff key={staff.id} staff={staff} click={handleClickStaff} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
