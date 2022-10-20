import { useState, useEffect } from "react";
import Search from "./Search";
import ListCard from "./ListCard";
import ListTab from "./ListTab";
import { useNavigate } from "react-router-dom";
import * as L from "./List.styled";
import Pagination from "react-js-pagination";
import "./Pagination.css";
import searchType from "../../atoms/search";
import { useRecoilState } from "recoil";

function ViewList() {
  const navigate = useNavigate();
  const navigateToAddPost = () => {
    navigate("/addPost");
  };
  const [searchTypeState, setSearchTypeState] = useRecoilState(searchType);

  const handlePageChange = (page: number) => {
    setSearchTypeState((prev) => ({ ...prev, currentPage: page }));
  };

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // axios get
    console.log("init");
  }, [searchTypeState]);

  return (
    <>
      <L.WholeLayout>
        <L.ListTitle>Share Your Experience</L.ListTitle>
        <L.ListText>여러분의 채식 경험을 자유롭게 공유해 보세요</L.ListText>
        <ListTab />
        <Search />
        {postList.length !== 0 && <ListCard postList={postList} />}

        <L.WriteButton onClick={navigateToAddPost}>글쓰기</L.WriteButton>
      </L.WholeLayout>
      <div>
        <Pagination
          activePage={searchTypeState.currentPage}
          itemsCountPerPage={10}
          totalItemsCount={50}
          pageRangeDisplayed={5}
          prevPageText="‹"
          nextPageText="›"
          onChange={handlePageChange}
        />
      </div>
    </>
  );
}
export default ViewList;
