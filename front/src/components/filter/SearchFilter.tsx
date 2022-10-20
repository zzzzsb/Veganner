import * as S from "././Filter.styled";
import searchType from "../../atoms/search";
import { useRecoilState } from "recoil";

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

function SearchFilter() {
  const [searchTypeState, setSearchTypeState] = useRecoilState(searchType);

  const locationButtons = locations.map((v: string) => {
    if (v.length === 2) {
      return (
        <S.FilterButton
          key={v}
          width={42}
          onClick={() => setSearchTypeState((prev) => ({ ...prev, region: v }))}
          active={searchTypeState.region === v}
        >
          {v}
        </S.FilterButton>
      );
    } else if (v.length === 3) {
      return (
        <S.FilterButton
          key={v}
          width={50}
          onClick={() => setSearchTypeState((prev) => ({ ...prev, region: v }))}
          active={searchTypeState.region === v}
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
          key={v}
          width={42}
          onClick={() => setSearchTypeState((prev) => ({ ...prev, type: v }))}
          active={searchTypeState.type === v}
        >
          {v}
        </S.FilterButton>
      );
    } else if (v.length === 3) {
      return (
        <S.FilterButton
          key={v}
          width={50}
          onClick={() => setSearchTypeState((prev) => ({ ...prev, type: v }))}
          active={searchTypeState.type === v}
        >
          {v}
        </S.FilterButton>
      );
    } else {
      return (
        <S.FilterButton
          key={v}
          width={64}
          onClick={() => setSearchTypeState((prev) => ({ ...prev, type: v }))}
          active={searchTypeState.type === v}
        >
          {v}
        </S.FilterButton>
      );
    }
  });

  return (
    <>
      <S.FilterLayout>
        {searchTypeState.group === 1 && (
          <S.FilterBox>지역별 | {locationButtons}</S.FilterBox>
        )}
        {(searchTypeState.group === 1 || searchTypeState.group === 2) && (
          <S.FilterBox>종류별 | {typeButtons}</S.FilterBox>
        )}
      </S.FilterLayout>
    </>
  );
}

export default SearchFilter;
