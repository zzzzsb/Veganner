import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import { Reset } from "styled-reset";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
<<<<<<< HEAD
import Insights from "./pages/Insights";
import Share from "./pages/Share";
import Write from "./pages/write/Write";
import LoginForm from "./pages/login/Login";
import RegisterForm from "./pages/register/Register";
import View from "./pages/view/View";
import Map from "./pages/Map";
import { IEditor } from "./pages/write/Write";

=======
import Insight from "./pages/insight/Insight";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import View from "./pages/postView/PostView";
import Map from "./pages/map/Map";
import data from "./datas/seoul.json";
import ResitemDetail from "./components/Map/ResitemDetail";
import List from "./pages/list/List";
import Kakao from "./pages/login/Kakao";
import AddPost from "./pages/addPost/Addpost";
>>>>>>> feature/front/pageview
function App() {
  return (
    <div>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
<<<<<<< HEAD
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/insights" element={<Insights />} />
          {/* <Route path="/board" element={} /> */}
          <Route path="/view" element={<View />} />
          <Route path="/write" element={<Write />} />
          <Route path="/explore" element={<Map />} />
          <Route path="/write" element={<Write />} />
=======
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/share" element={<List />} />
          <Route path="/board/:postId" element={<View />} />
          <Route path="/insights" element={<Insight />} />
          <Route path="/addPost" element={<AddPost />} />
          {/* <Route path="/edit" element={<EditPost />} /> */}
          <Route path="/explore" element={<Map />} />
          <Route
            path="/explore/detail/:id"
            element={<ResitemDetail detail={data.data} />}
          />
          <Route path="/auth/kakao/callback" element={<Kakao />} />
>>>>>>> feature/front/pageview
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
