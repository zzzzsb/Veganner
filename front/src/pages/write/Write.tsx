import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import styled from "styled-components";
// import { useState } from "react";
// import React, { SetStateAction, Dispatch } from "react";

const WriteLayout = styled.div`
  width: 1020px;
`;

const CategoryButtonBox = styled.div`
  display: flex;
  width: 200px;
  height: 30px;
  margin: 20px auto;
`;
const CategoryButton = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  /* background-color: #004d43;
  color: #f1f1f1; */
  background-color: #d9d9d9;
  color: #004d43;
  text-align: center;
  line-height: 30px;
  margin: 0 10px;
  font-size: 14px;
  font-weight: 700;
`;

const TitleInput = styled.input`
  width: 580px;
  height: 50px;
  border: none;
  font-size: 16px;
  display: block;
  margin: 0 auto 20px auto;
`;

const SearchBar = styled.input`
  width: 300px;
  height: 45px;
  border-radius: 25px;
  border: none;
  border: 0.5px solid #212121;
  display: block;
  margin: 0 auto 20px auto;
`;

const FilterLayout = styled.div`
  float: left;
  margin: 0 auto;
`;
const FilterBox = styled.div`
  width: 1200px;
  height: 30px;
  display: flex;
  justify-content: center;
  line-height: 30px;
  font-size: 14px;
`;

const FilterButton = styled.div`
  width: 46px;
  height: 26px;
  border-radius: 25px;
  border: 1px solid #212121;
  text-align: center;
  line-height: 26px;
  margin: 0 5px 10px 5px;
`;
// interface WriteProps {
//   categories: Array<string>;
//   category: string;
//   setCategory: Dispatch<SetStateAction<boolean>>;
// }
function Write() {
  // 초기값은 식당으로 설정
  // const [category, setCategory] = useState<string>("restaurant");

  // const categories = [
  //   {
  //     name: "식당",
  //     value: "restaurant",
  //   },
  //   {
  //     name: "레시피",
  //     value: "recipe",
  //   },
  // ];
  const location = [
    "전체",
    "서울",
    "경기",
    "강원",
    "인천",
    "세종",
    "충북",
    "충남",
    "대전",
    "광주",
    "전남",
    "경북",
    "대구",
    "경남",
    "울산",
    "부산",
    "제주도",
  ];
  const type = [
    "전체",
    "한식",
    "양식",
    "카페",
    "분식",
    "동남아",
    "술집",
    "베이커리",
    "인도/중동",
    "중국식",
  ];
  const locationButtons = location.map((v) => <FilterButton>{v}</FilterButton>);
  const typeButtons = type.map((v) => <FilterButton>{v}</FilterButton>);
  return (
    <WriteLayout>
      {/* <CategoryFilter
        categories={categories}
        category={category}
        setCategory={setCategory}
      /> */}
      <CategoryButtonBox>
        <CategoryButton>식당</CategoryButton>
        <CategoryButton>레시피</CategoryButton>
      </CategoryButtonBox>
      <TitleInput type="text" placeholder="제목" />
      <SearchBar type="text" placeholder="장소를 검색해 등록해주세요." />
      <FilterLayout>
        <FilterBox>지역별 | {locationButtons}</FilterBox>
        <FilterBox>종류별 | {typeButtons}</FilterBox>
      </FilterLayout>
      <Editor
        initialValue="당신의 채식 경험을 공유해 주세요!"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
      />
    </WriteLayout>
  );
}

export default Write;
