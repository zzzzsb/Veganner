import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Insights from "./pages/Insights";
import "./styles/styles.css";
import { Reset } from "styled-reset";
import LoginForm from "./pages/login/Login";
import RegisterForm from "./pages/register/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/insigths" element={<Insights />} />
          {/* <Route path="/Share" element={} />
          <Route path="/Explore" element={} /> */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
