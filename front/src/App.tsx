import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import { Reset } from "styled-reset";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Insights from "./pages/Insights";
// import Share from "./pages/Share";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import View from "./pages/view/View";
import Map from "./pages/map/Map";
import { IEditor } from "./pages/write/Write";
import data from "./datas/seoul.json";
import ResitemDetail from "./components/Map/ResitemDetail";
import List from "./pages/list/List";
import Kakao from "./pages/login/Kakao";
import GoogleCallback from "./pages/login/GoogleCallback";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/register" element={<Register/>} />  
          <Route path="/share" element={<List/>} /> 
          <Route path="/insights" element={<Insights />} />
          <Route path="/view" element={<View />} />
          <Route path="/write" element={<Write />} />
          <Route path="/explore" element={<Map />} />
          <Route
            path="/explore/detail/:id"
            element={<ResitemDetail detail={data.data} />}
          />
          <Route path="/auth/kakao/callback" element={<Kakao />} />
          <Route path="/auth/google/callback" element={<GoogleCallback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
