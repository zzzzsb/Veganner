import MainMap from "../../components/Map/MainMap";
import Resitem from "../../components/Map/Resitem";
import React, { useState, useEffect } from "react";
import Location from "../../datas/seoul.json";
import { Restaurant } from "../../types/restaurant";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Paging from "../../components/Map/Paging"
import * as S from "./Map.styled";


const list = Location.data;
const initialRegionValues = ['강남구', '강동구', '강북구', '강서구','관악구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '용산구', '은평구', '종로구', '중구', '중랑구'];

const initialTypeValues = ['동남아', '분식', '베이커리','술집', '양식', '인도/중국', '중국식', '카페', '한식']

const initialVeganValues = ['채식음식점', '채식가능음식점'];

function Map() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");  
  const [result, setResult] = useState(list); //리스트에 나타낼 전체 아이템

  //페이지네이션 관련
  const [currentpage, setCurrentpage] = useState(1); //현재페이지
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(result);

  //카테고리 지역관련
  const [regions, setRegions] = useState<string[]>(initialRegionValues);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [isOpenRegionList, setIsOpenRegionList] = useState<boolean>(false);

  // 카테고리 종류관련
  const [types, setTypes] = useState<string[]>(initialTypeValues);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isOpenTypeList, setIsOpenTypeList] = useState<boolean>(false); 

  //카테고리 비건관련
  const [vegans, setVegans] = useState<string[]>(initialVeganValues);
  const [selectedVegan, setSelectedVegan] = useState<string | null>(null);
  const [isOpenVeganList, setIsOpenVeganList] = useState<boolean>(false);

  // 카테고리 함수

  function handleSelectRegion(e: React.MouseEvent<HTMLElement>) {
    const { innerText } = e.currentTarget;
    setSelectedRegion(innerText);
    setIsOpenRegionList(!isOpenRegionList);
    
    
    const filteredStores = result.filter((item) => item.borough === innerText);
    setResult(filteredStores);
  }

  function handleSelectType(e: React.MouseEvent<HTMLElement>) {
    const { innerText } = e.currentTarget;
    setSelectedRegion(innerText);
    setIsOpenTypeList(!isOpenTypeList);
    
    const filteredStores = result.filter((item) => item.industry === innerText);
    setResult(filteredStores);
  }

  function handleSelectVegan(e: React.MouseEvent<HTMLElement>) {
    const { innerText } = e.currentTarget;
    setSelectedVegan(innerText);
    setIsOpenVeganList(!isOpenRegionList);
    
    const filteredStores = result.filter((item) => item.food === innerText);
    setResult(filteredStores);
  };




  //페이지네이션
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
        <S.resList>
          <div className="searchContainer">
            <form>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              
              <S.selectBox1>
              {/* 지역 */}
                <S.select_location
                type="button"
                onClick={() => setIsOpenRegionList(!isOpenRegionList)}>
                  {selectedRegion ?? "지역별"}
                </S.select_location>

                {isOpenRegionList&&
                (<S.optionList>
                  {regions.map((region) => (
                    <S.optionitem key={region} onClick={handleSelectRegion}>{region}</S.optionitem>
                  ))}                  
                </S.optionList>)}
              
              
              
                {/* 종류 */}
                <S.select_location
                type="button"
                onClick={() => setIsOpenTypeList(!isOpenTypeList)}>
                  {selectedType ?? "종류별"}
                  </S.select_location>

                {isOpenTypeList&&
                (<S.optionList>
                  {types.map((type) => (
                    <S.optionitem key={type} onClick={handleSelectType}>{type}</S.optionitem>
                  ))}                  
                </S.optionList>)}
              
              
              
                {/* 비건 */}
                <S.select_location
                type="button"
                onClick={() => setIsOpenVeganList(!isOpenVeganList)}>
                  {selectedVegan ?? "비건"}
                </S.select_location>

                {isOpenRegionList&&
                (<S.optionList>
                  {vegans.map((vegan) => (
                    <S.optionitem key={vegan} onClick={handleSelectVegan}>{vegan}</S.optionitem>
                  ))}                  
                </S.optionList>)}
              </S.selectBox1>
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
        </S.resList>
        <MainMap items={result}/>
      </S.Layout>
    </>
  );
}

export default Map;
