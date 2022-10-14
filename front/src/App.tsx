import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Insights from "./pages/Insights";
import "./styles/styles.css";
import { Reset } from "styled-reset";
import LoginForm from "./pages/login/Login";
import RegisterForm from "./pages/register/Register";
import View from "./pages/view/View";
import Map from "./pages/Map"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/share" element={<View />} />
          <Route path="/explore" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
