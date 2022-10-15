import React, { useState } from 'react';
import Pagination from 'react-js-pagination';


interface PagingProps {
    item: any;
}
function Paging ({item} : PagingProps) {
  const [page, setPage] = useState(1);
  function handlePageChange (page: number) {
    setPage(page);
  };
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={item.length}
      pageRangeDisplayed={5}
      prevPageText="‹"
      nextPageText="›"
      onChange={handlePageChange}
    />
  );
};
export default Paging;