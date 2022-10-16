import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import styled from "styled-components";

interface PagingProps {
    item: any;
    page: number;
    setPage: any;
}

const navs = styled.nav`
  text-align: center;
`

function Paging ({item, page, setPage} : PagingProps) {
  
  return (
    <div>
      <nav>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={item.length}
        pageRangeDisplayed={5}
        prevPageText="‹"
        nextPageText="›"
        onChange={setPage}
      />
      </nav>
    </div>
  );
};
export default Paging;