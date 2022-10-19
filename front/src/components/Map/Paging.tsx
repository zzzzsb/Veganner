import React, { useState } from "react";
import Pagination from "react-js-pagination";
import * as S from "../../pages/map/Map.styled";
import * as P from "./Paging.styled";

interface PagingProps {
  item: any;
  page: number;
  setPage: any;
}

function Paging({ item, page, setPage }: PagingProps) {
  return (
    <S.paging>
      <P.paging
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={item.length}
        pageRangeDisplayed={5}
        prevPageText="‹"
        nextPageText="›"
        onChange={setPage}
      />
    </S.paging>
  );
}
export default Paging;
