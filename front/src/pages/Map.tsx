import MainMap from "../components/Map/MainMap";
import SideBar from "../components/Map/SideBar";
import Resitem from "../components/Map/Resitem";
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
      <section className="map">
        <SideBar />
        <div className="resList">
          <div className="searchContainer">
            <form>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <select
                name="sort-location" size={5}
              >
                <option value="">지역별</option>
                <option value="gangnam">강남구</option>
                <option value="gangdong">강동구</option>
                <option value="gangbuk">강북구</option>
                <option value="gangseo">강서구</option>
                <option value="gwanak">관악구</option>
                <option value="gwangjin">광진구</option>
                <option value="guro">구로구</option>
                <option value="geumcheon">금천구</option>
                <option value="nowon">노원구</option>
                <option value="dobong">도봉구</option>
                <option value="dondaemun">동대문구</option>
                <option value="dongjak">동작구</option>
                <option value="mapo">마포구</option>
                <option value="seodaemun">서대문구</option>
                <option value="seocho">서초구</option>
                <option value="seongdong">성동구</option>
                <option value="seongbuk">성북구</option>
                <option value="songpa">송파구</option>
                <option value="yangcheon">양천구</option>
                <option value="ydp">영등포구</option>
                <option value="yongsan">용산구</option>
                <option value="eunpyeong">은평구</option>
                <option value="jongno">종로구</option>
                <option value="jung">중구</option>
                <option value="jungnang">중랑구</option>

              </select>
              {/* <select
                name="sort-"
              >
                <option value="">지역별</option>
                <option value="gangnam">강남구</option>
                <option value="gangdong">강동구</option>
                <option value="gangbuk">강북구</option>
                <option value="gangseo">강서구</option>
                <option value="gwanak">관악구</option>
                <option value="gwangjin">광진구</option>
                <option value="guro">구로구</option>
                <option value="geumcheon">금천구</option>
                <option value="nowon">노원구</option>
                <option value="dobong">도봉구</option>
                <option value="dondaemun">동대문구</option>
                <option value="dongjak">동작구</option>
   

              </select>
              <select
                name="sort-location"
              >
                <option value="">지역별</option>
                <option value="gangnam">강남구</option>
                <option value="gangdong">강동구</option>
                <option value="gangbuk">강북구</option>
                <option value="gangseo">강서구</option>
                <option value="gwanak">관악구</option>
                <option value="gwangjin">광진구</option>
                <option value="guro">구로구</option>
                <option value="geumcheon">금천구</option>
                <option value="nowon">노원구</option>
                <option value="dobong">도봉구</option>
                <option value="dondaemun">동대문구</option>
                

              </select> */}
            </form>
            <div className="resContainer">
              {/* 식당 전체 리스트 보여주고 싶은데 방법을 모르겠다... */}
              <Resitem item={location} idx={1} res_id={1} />
            </div>
          </div>
        </div>
        <MainMap i={location[1]}/>
      </section>
    </>
  );
}

export default Map;
