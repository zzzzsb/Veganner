import React from "react";
import { useState, useEffect } from "react";
import * as Api from "../../api/api";
import styled from "styled-components";
import Search from "./Search"
import listsState from "../../atoms/search";
import { useRecoilValue, useResetRecoilState, useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

function useViewList() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const navigateToWrite = () => {
    navigate("/write");
  };
  // const [lists,setLists] = useRecoilState(listsState);
  const lists=useRecoilValue(listsState)
  useEffect(() => {
    console.log("ist",lists)
    // const lists=useRecoilValue(listsState)
  }, [lists]);

  return (
    <>
    <Search/>

    <div>
      {lists.map((list, index) => {
        console.log(list);
        return <div key={index}>{list["Title"]}</div>;
      })}
    </div>
    <button onClick={navigateToWrite}>글쓰기</button>
    </>
  );
}
export default useViewList;
