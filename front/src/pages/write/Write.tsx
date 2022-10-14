import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import * as S from "./Write.styled";

// import { useState } from "react";
// import React, { SetStateAction, Dispatch } from "react";

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
  const locationButtons = location.map((v) => (
    <S.FilterButton>{v}</S.FilterButton>
  ));
  const typeButtons = type.map((v) => <S.FilterButton>{v}</S.FilterButton>);
  return (
    <S.WriteLayout>
      {/* <CategoryFilter
        categories={categories}
        category={category}
        setCategory={setCategory}
      /> */}
      <S.CategoryButtonBox>
        <S.CategoryButton>식당</S.CategoryButton>
        <S.CategoryButton>레시피</S.CategoryButton>
      </S.CategoryButtonBox>
      <S.TitleInput type="text" placeholder="제목" />
      <S.SearchBar type="text" placeholder="장소를 검색해 등록해주세요." />
      <S.FilterLayout>
        <S.FilterBox>지역별 | {locationButtons}</S.FilterBox>
        <S.FilterBox>종류별 | {typeButtons}</S.FilterBox>
      </S.FilterLayout>
      <Editor
        initialValue="당신의 채식 경험을 공유해 주세요!"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
      />
    </S.WriteLayout>
  );
}

export default Write;
