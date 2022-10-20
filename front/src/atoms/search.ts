import { atom } from "recoil";

interface SearchType {
  group: number;
  currentPage: number;
  keyword: string;
  region: string;
  type: string;
}

const searchType = atom<SearchType>({
  key: "searchType",
  default: {
    group: 0,
    currentPage: 1,
    keyword: "",
    region: "전체",
    type: "전체",
  },
});

export default searchType;
