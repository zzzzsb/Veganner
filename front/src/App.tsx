import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import { Reset } from "styled-reset";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Insights from "./pages/Insights";
// import Share from "./pages/Share";
import Write from "./pages/write/Write";
import LoginForm from "./pages/login/Login";
import RegisterForm from "./pages/register/Register";
import View from "./pages/view/View";
import Map from "./pages/Map";
import { IEditor } from "./pages/write/Write";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/Insigths" element={<Insights />} />
          <Route path="/Explore" element={<Write/>} />
          <Route path="/register" element={<Register/>} />  
          <Route path="/share" element={<List/>} /> 
          {/* <Route path="/Share" element={} />
          */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
