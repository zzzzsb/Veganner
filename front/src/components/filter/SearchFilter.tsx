import * as S from "././Filter.styled";
import {
  useRecoilValue,
  useResetRecoilState,
  useRecoilState,
  useSetRecoilState,
} from "recoil";
import groupState from "../../atoms/group";
import { useState } from "react";
import addressState from "../../atoms/address";
import typeState from "../../atoms/type";

function SearchFilter() {
  const group = useRecoilValue(groupState);
  const [address, setAddress] = useRecoilState(addressState);
  const [type, setType] = useRecoilState(typeState);

//   function clickEvent(e:React.MouseEvent<HTMLButtonElement>){
//     e.preventDefault();
//     setAddress

//   }
  const locations = [
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
  const types = [
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
  const locationButtons = locations.map((v: string) => {
    if (v.length === 2) {
      return (
        <S.FilterButton
          width={42}
          onClick={(e:React.MouseEvent<HTMLButtonElement>) => {e.preventDefault();setAddress(v)}}
          active={address === v}
        >
          {v}
        </S.FilterButton>
      );
    } else if (v.length === 3) {
      return (
        <S.FilterButton
          width={50}
          onClick={(e) => {e.preventDefault();setAddress(v)}}
          active={address === v}
        >
          {v}
        </S.FilterButton>
      );
    }
  });
  const typeButtons = types.map((v: string) => {
    if (v.length === 2) {
      return (
        <S.FilterButton
          width={42}
          onClick={(e) => {e.preventDefault();setType(v)}}
          active={type === v}
        >
          {v}
        </S.FilterButton>
      );
    } else if (v.length === 3) {
      return (
        <S.FilterButton
          width={50}
          onClick={(e) => {e.preventDefault();setType(v)}}
          active={type === v}
        >
          {v}
        </S.FilterButton>
      );
    } else {
      return (
        <S.FilterButton
          width={64}
          onClick={(e) => {e.preventDefault();setType(v)}}
          active={type === v}
        >
          {v}
        </S.FilterButton>
      );
    }
  });

  let restaurant = false;
  let recipe = false;
  if (group === 1) {
    restaurant = true;
  } else if (group === 2) {
    recipe = true;
  }
  return (
    <>
      <S.FilterLayout>
        {restaurant && <S.FilterBox>지역별 | {locationButtons}</S.FilterBox>}
        {(restaurant || recipe) && (
          <S.FilterBox>종류별 | {typeButtons}</S.FilterBox>
        )}
      </S.FilterLayout>
    </>
  );
}

export default SearchFilter;
