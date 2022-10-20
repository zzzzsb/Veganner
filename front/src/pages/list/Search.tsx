/*검색창*/
import { useState, ChangeEvent, MouseEvent } from "react";

import * as L from "./List.styled";

import { FaSearch } from "react-icons/fa";
import { BsFilterCircle } from "react-icons/bs";
import { BsFillFilterCircleFill } from "react-icons/bs";
import SearchFilter from "../../components/filter/SearchFilter";
import searchType from "../../atoms/search";
import { useRecoilState } from "recoil";

function ListSearch() {
  const [inputState, setInputState] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTypeState, setSearchTypeState] = useRecoilState(searchType);

  const filterStyle: React.CSSProperties = {
    position: "absolute",
    top: "0",
    right: "0",
  };

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputState(value);
  };

  const handleClickSearchButton = (e: MouseEvent<HTMLButtonElement>) => {
    setSearchTypeState((prev) => ({ ...prev, keyword: inputState }));
  };

  return (
    <L.SearchWrapper>
      <L.SearchBox>
        <L.SearchInput
          type="text"
          placeholder="검색"
          autoFocus={true}
          value={inputState}
          onChange={handleChangeKeyword}
        />
        <L.SearchButton type="button" onClick={handleClickSearchButton}>
          <FaSearch color="white" />
        </L.SearchButton>
      </L.SearchBox>

      {searchTypeState.group !== 0 && (
        <>
          {!isOpen ? (
            <BsFilterCircle
              size="50"
              style={filterStyle}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <BsFillFilterCircleFill
              size="50"
              style={filterStyle}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          {isOpen && <SearchFilter />}
        </>
      )}
    </L.SearchWrapper>
  );
}

export default ListSearch;
