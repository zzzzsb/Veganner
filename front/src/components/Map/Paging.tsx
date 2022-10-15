import React, { useState } from 'react';
import Pagination from 'react-js-pagination';

interface PagingProps {
    item: any;
    page: number;
    setPage: any;
}
function Paging ({item, page, setPage} : PagingProps) {
  
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={item.length}
      pageRangeDisplayed={5}
      prevPageText="‹"
      nextPageText="›"
      onChange={setPage}
    />
  );
};
export default Paging;