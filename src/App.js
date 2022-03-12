import React, { useEffect, useState } from "react";
import { Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import StaffsPage from "./components/pages/StaffsPage";
import Department from "./components/pages/DepartmentPage"
import Footer from "./components/Footer";
import HandleClickStaff from "./components/HandleClickStaff";
import Salary from "./components/pages/SalaryPage";
import HandelRenderSearch from "./components/Search";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDepartments, fetchSalary, fetchStaffs } from "./actions";
import DepartmentDetail from "./components/DepartmentDetail";
import { CSSTransition, TransitionGroup } from "react-transition-group";




function App() {
  

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDepartments());
    dispatch(fetchStaffs());
    dispatch(fetchSalary());
  }, []);
  const animation = useSelector(state => state.animation)  ;
  console.log("animation : "  , animation)
  return (
    <div className="App">
      <Header />
        <CSSTransition in={animation}  classNames="page" timeout={200}>

        <Routes>
          <Route path="/" element={<StaffsPage />} />
          <Route path="/staffinfo/:id" element={<HandleClickStaff />} />
          <Route path="/Departments" element={<Department />} />
          <Route path="/Department/:name" element={<DepartmentDetail/>} />
          <Route path="/Salary" element={<Salary />} />
          <Route path="/search" element={<HandelRenderSearch />} />
        </Routes>
        </CSSTransition>
      <Footer />
    </div>
  );
}

export default App;
