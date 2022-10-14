import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Insights from "./pages/Insights";
import "./styles/styles.css";
import { Reset } from "styled-reset";
import View from "./pages/view/View";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/insigths" element={<Insights />} />
          <Route path="/share" element={<View />} />
          {/* <Route path="/login" element={<LoginForm />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
