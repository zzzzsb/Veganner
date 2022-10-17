import React from "react";
import { useState, useEffect } from "react";
import * as Api from "../../api/api";
import styled from "styled-components";
import Search from "./Search"

function useViewList() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    // "userlist" 엔드포인트로 GET 요청을 하고, users를 response의 data로 세팅함.
    Api.get("board").then((res) => setLists(res.data));
  }, []);

  return (
    <>
    <Search/>

    <div>
      {lists.map((list, index) => {
        console.log(list);
        return <div key={index}>{list["Title"]}</div>;
      })}
    </div>
    </>
  );
}
export default useViewList;
