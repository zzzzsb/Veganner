import MainMap from "../components/Map/MainMap";
import SideBar from "../components/Map/SideBar";
import ResList from "../components/Map/ResList";
import React, { useState, useEffect } from "react";
import Location from "../datas/seoul.json";

const location = Location.data;

function Map() {
  const [searchValue, setSearchValue] = useState("");
  const [restaurant, setRestarant] = useState([]);
  const [resList, setResList] = useState([]);

  // 식당 리스트 보여주기
  // useEffect(() => {
  //     restaurant && setResList(

  //     )

  // })

  return (
    <>
      <section className="Title">
        <div>Explore the Vegan World.</div>
        <div>비거너의 비건 맛집 지도를 자유롭게 이용해 보세요.</div>
      </section>
      <section className="Map">
        <SideBar />
        <div className="sidebar">
          <div className="searchContainer">
            <form>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
            </form>
            <div className="resContainer">
              {/* 식당 전체 리스트 보여주고 싶은데 방법을 모르겠다... */}
              <ResList item={location} idx={1} res_id={1} />
            </div>
          </div>
        </div>
        <MainMap />
      </section>
    </>
  );
}

export default Map;
