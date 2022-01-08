import react from "react";
import "./App.css";
import Staff from "./components/staff";
import { STAFFS } from "./staffs";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  const handleClickStaff = (prop) => {
    console.log(prop);
  };
  return (
    <div className="App">
      <Header />
      <div className="wrapper row">
        <div className="wrapper__staffs">
          {STAFFS.map((staff) => (
            <Staff key={staff.id} staff={staff} click={handleClickStaff} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
