import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import { Reset } from "styled-reset";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Insights from "./pages/Insights";
<<<<<<< HEAD
import View from "./pages/view/View";
import "./styles/styles.css";
import { Reset } from "styled-reset";
=======
import Share from "./pages/Share";
import Write from "./pages/write/Write";
import LoginForm from "./pages/login/Login";
import RegisterForm from "./pages/register/Register";
import View from "./pages/view/View";
import Map from "./pages/Map";
import { IEditor } from "./pages/write/Write";
>>>>>>> origin/dev

function App() {
  return (
    <div>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
<<<<<<< HEAD
          <Route path="/insights" element={<Insights />} />
          <Route path="/share" element={<View />} />
          {/* <Route path="/login" element={<LoginForm />} /> */}
=======
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/insights" element={<Insights />} />
          {/* <Route path="/board" element={} /> */}
          <Route path="/view" element={<View />} />
          <Route path="/write" element={<Write />} />
          <Route path="/explore" element={<Map />} />
          <Route path="/write" element={<Write />} />
>>>>>>> origin/dev
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
