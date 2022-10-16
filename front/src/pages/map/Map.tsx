import MainMap from "../../components/Map/MainMap";
import Resitem from "../../components/Map/Resitem";
import { useState, useEffect } from "react";
import Location from "../../datas/seoul.json";
import { Restaurant } from "../../types/restaurant";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Paging from "../../components/Map/Paging"
import * as S from "./Map.styled";


const list = Location.data;
interface OptionProps {
  items: Array<any>;
  e: any;
}

function Map() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");  
  const [result, setResult] = useState(list); //리스트에 나타낼 전체 아이템
  const [currentpage, setCurrentpage] = useState(1); //현재페이지
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(result);

  

  //카테고리
  
  // /* 일반함수 */
  // const label = document.querySelector('.select-location');
  // const options = document.querySelectorAll('.optionitem');

  // // 클릭한 옵션의 텍스트를 라벨 안에 넣음
  // const handleSelect = function(item) {
  //   label.innerHTML = item.textContent;
  //   label.parentNode.classList.remove('active');
  // }
  // // 옵션 클릭시 클릭한 옵션을 넘김
  // options.forEach(function(option){
  //   option.addEventListener('click', function(){handleSelect(option)})
  // })
  // // 라벨을 클릭시 옵션 목록이 열림/닫힘
  // label.addEventListener('click', function(){
  //   if(label.parentNode.classList.contains('active')) {
  //     label.parentNode.classList.remove('active');
  //   } else {
  //     label.parentNode.classList.add('active');
  //   }
  // });

  // 지역별 카테고리 함수
  function handleBorough({items, e}: OptionProps){
    
    const filled: Array<any> = items.filter(item => item.borough == e);
    setResult(filled);
  };

  function handleIndustry({e}: OptionProps){
    const Value: string = e.options[e.selectedIndex].text
    const filled: Array<any> = result.filter(item => item.industry == Value);
    setResult(filled);
  };

  function handleFood({items, e}: OptionProps){
    const filled: Array<any> = items.filter(item => item.food == e);
    setResult(filled);
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
                <S.select_location>지역별</S.select_location>
                <S.optionList>
                  <S.optionitem>강남구</S.optionitem>
                  <S.optionitem>강동구</S.optionitem>
                  <S.optionitem>강북구</S.optionitem>
                  <S.optionitem>강서구</S.optionitem>
                  <S.optionitem>관악구</S.optionitem>
                  <S.optionitem>광진구</S.optionitem>
                  <S.optionitem>구로구</S.optionitem>
                  <S.optionitem>금천구</S.optionitem>
                  <S.optionitem>노원구</S.optionitem>
                  <S.optionitem>도봉구</S.optionitem>
                  <S.optionitem>동대문구</S.optionitem>
                  <S.optionitem>동작구</S.optionitem>
                  <S.optionitem>마포구</S.optionitem>
                  <S.optionitem>서대문구</S.optionitem>
                  <S.optionitem>서초구</S.optionitem>
                  <S.optionitem>성동구</S.optionitem>
                  <S.optionitem>성북구</S.optionitem>
                  <S.optionitem>송파구</S.optionitem>
                  <S.optionitem>양천구</S.optionitem>
                  <S.optionitem>영등포구</S.optionitem>
                  <S.optionitem>용산구</S.optionitem>
                  <S.optionitem>은평구</S.optionitem>
                  <S.optionitem>종로구</S.optionitem>
                  <S.optionitem>중구</S.optionitem>
                  <S.optionitem>중랑구</S.optionitem>
                </S.optionList>
              </S.selectBox1>

              <select
                name="select-type" onChange={() => handleIndustry}
              >
                {/* <option value="">종류별</option> */}
                <option value="한식">한식</option>
                <option value="양식">양식</option>
                <option value="cafe">카페</option>
                <option value="snack">분식</option>
                <option value="southeast">동남아</option>
                <option value="bar">술집</option>
                <option value="bakery">베이커리</option>
                <option value="india/middleeast">인도/중동</option>
                <option value="chinese">중국식</option>
              </select>
              <select
                name="select-vegantype"
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
        </S.resList>
        <MainMap items={result}/>
      </S.Layout>
    </>
  );
}

export default Map;
