import React, { useState } from "react";
import Pagination from "react-js-pagination";
import * as S from "../../pages/map/Map.styled";
import styled, { css } from "styled-components";
import "./paging.css";

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

interface PagingProps {
  item: any;
  page: number;
  setPage: any;
}

function Paging({ item, page, setPage }: PagingProps) {
  return (
    <S.paging>
      <Pagination
        activePage={page}
        itemsCountPerPage={5}
        totalItemsCount={item.length}
        pageRangeDisplayed={5}
        onChange={setPage}
        linkClassFirst="litag"
      />
    </S.paging>
  );
}
export default Paging;
