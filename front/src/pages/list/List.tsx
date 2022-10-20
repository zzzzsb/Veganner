import { useState, useEffect } from "react";
import Search from "./Search";
import ListCard from "./ListCard";
import ListTab from "./ListTab";
import { useNavigate } from "react-router-dom";
import * as L from "./List.styled";
import Pagination from "react-js-pagination";
import "./Pagination.css";

function ViewList() {
  const navigate = useNavigate();
  const navigateToAddPost = () => {
    navigate("/addPost");
  };

  const [group, setGroup] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [type, setType] = useState<string>("");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // axios get
    console.log("init");
  }, [currentPage, group, keyword, region, type]);

  return (
    <>
      <L.WholeLayout>
        <L.ListTitle>Share Your Experience</L.ListTitle>
        <L.ListText>여러분의 채식 경험을 자유롭게 공유해 보세요</L.ListText>
        <ListTab group={group} setGroup={setGroup} />
        <Search
          setKeyword={setKeyword}
          setRegion={setRegion}
          setType={setType}
          region={region}
          type={type}
          group={group}
        />
        {postList.length !== 0 && <ListCard postList={postList} />}

        <L.WriteButton onClick={navigateToAddPost}>글쓰기</L.WriteButton>
      </L.WholeLayout>
      <div>
        <Pagination
          activePage={currentPage}
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
