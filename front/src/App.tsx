import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import { Reset } from "styled-reset";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Insights from "./pages/Insights";
import "./styles/styles.css";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import List from "./pages/list/List";


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
