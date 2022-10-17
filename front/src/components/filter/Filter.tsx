import * as S from "././Filter.styled";

function Filter() {
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
  const locationButtons = location.map((v: string) => {
    if (v.length === 2) {
      return <S.FilterButton width={42}>{v}</S.FilterButton>;
    } else if (v.length === 3) {
      return <S.FilterButton width={46}>{v}</S.FilterButton>;
    }
  });
  const typeButtons = type.map((v: string) => {
    if (v.length === 2) {
      return <S.FilterButton width={42}>{v}</S.FilterButton>;
    } else if (v.length === 3) {
      return <S.FilterButton width={50}>{v}</S.FilterButton>;
    } else {
      return <S.FilterButton width={62}>{v}</S.FilterButton>;
    }
  });
  return (
    <>
      <S.FilterLayout>
        <S.FilterBox>지역별 | {locationButtons}</S.FilterBox>
        <S.FilterBox>종류별 | {typeButtons}</S.FilterBox>
      </S.FilterLayout>
    </>
  );
}

export default Filter;
