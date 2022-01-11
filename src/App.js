import React from "react";
import { Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import StaffsPage from "./components/pages/StaffsPage";
import Department from "./components/pages/DepartmentPage"
import Footer from "./components/Footer";
import HandleClickStaff from "./components/HandleClickStaff";
import Salary from "./components/pages/SalaryPage";
import HandelRenderSearch from "./components/Search";
import "./App.css";



function App() {
  return (
    <div className="App">
      <Header />
      
        <Routes>
          <Route path="/" element={<StaffsPage />} />
          <Route path="/staffinfo/:id" element={<HandleClickStaff />} />
          <Route path="/Department" element={<Department />} />
          <Route path="/Salary" element={<Salary />} />
          <Route path="/search" element={<HandelRenderSearch />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
