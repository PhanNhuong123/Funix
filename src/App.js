import React from "react";
import { Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import StaffsPage from "./components/pages/StaffsPage";
import Footer from "./components/Footer";
import HandleClickStaff from "./components/HandleClickStaff";
import "./App.css";



function App() {
  return (
    <div className="App">
      <Header />
      
        <Routes>
          <Route path="/" element={<StaffsPage />} />
          <Route path="/staffinfo/:id" element={<HandleClickStaff />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
