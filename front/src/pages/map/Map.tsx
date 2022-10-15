import MainMap from "../../components/Map/MainMap";
import SideBar from "../../components/Map/SideBar";
import Resitem from "../../components/Map/Resitem";
import { useState, useEffect } from "react";
import Location from "../../datas/seoul.json";
import { Restaurant } from "../../types/restaurant";
import { useParams, useNavigate } from "react-router-dom";
import Paging from "../../components/Map/Paging"
import * as S from "./Map.styled";


const list = Location.data;

function Map() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");  
  const [result, setResult] = useState(list); //리스트에 나타낼 전체 아이템
  const [currentpage, setCurrentpage] = useState(1); //현재페이지
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(result);




  useEffect(() => {
    
    setIndexOfLastPost(currentpage * 10);
    setIndexOfFirstPost(indexOfLastPost - 10);
    setCurrentPosts(result.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentpage, indexOfFirstPost, indexOfLastPost, result, 10]);
  

  return (
    <>
      <S.Title>
        <div>Explore the Vegan World.</div>
        <div>비거너의 비건 맛집 지도를 자유롭게 이용해 보세요.</div>
      </S.Title>
      <S.Layout>
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
              <select
                name="sort-type"
              >
                <option value="">종류별</option>
                <option value="korean">한식</option>
                <option value="western">양식</option>
                <option value="cafe">카페</option>
                <option value="snack">분식</option>
                <option value="southeast">동남아</option>
                <option value="bar">술집</option>
                <option value="bakery">베이커리</option>
                <option value="india/middleeast">인도/중동</option>
                <option value="chinese">중국식</option>
              </select>
              <select
                name="sort-vegantype"
              >
                <option value="">비건</option>
                <option value="full">채식전문점</option>
                <option value="possible">채식가능음식점</option>
              </select>
            </form>
            <S.resContainer>
              {currentPosts.map((item) => (
                <Resitem key={item.index} item={item as Restaurant} />
              ))}
              <S.pagination>
                <Paging item={result} page={currentpage} setPage={setCurrentpage}/>
              </S.pagination>
            </S.resContainer>
          </div>
        </div>
        <MainMap items={result}/>
      </S.Layout>
    </>
  );
}

export default Map;
