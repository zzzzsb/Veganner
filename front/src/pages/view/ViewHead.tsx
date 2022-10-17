import React from "react";
import styled from "styled-components";

const ViewTitleBlock = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-weight: 500;
    font-size: 40px;
  }
  .label {
    font-weight: 600;
    color: #004d43;
  }
`;

const ViewInfoBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 15px 15px 15px;

  p {
    margin: 0 10px 0 10px;
  }
  .postinfoblock {
    flex: none;
  }
  .likeblock {
    margin-left: auto;
    flex: none;
    align-items: center;
  }
  .line {
    border: 0.5px solid #21212180;
    transform: rotate(0.95deg);
  }
  .pic {
    width: 20px;
    height: 20px;
    background-color: #21212180;
    border-radius: 50%;
    float: left;
    // margin-right: 10px;
  }
  .like {
    margin-right: 5px;
  }
  .count {
    color: #004d43;
  }
`;

function ViewHead() {
  return (
    <>
      <ViewTitleBlock>
        <div className="label">레시피</div>
        <h1>토마토 파프리카 그린 샐러드</h1>
      </ViewTitleBlock>
      <ViewInfoBlock>
        <div className="postinfoblock">
          <span className="pic"></span>
          <p>김현정</p>
          <span className="line"></span>
          <p>2022-10-10</p>
          <span className="line"></span>
          <p>양식</p>
        </div>
        <div className="likeblock">
          <span className="like">좋아요</span>
          <span className="count">24</span>
        </div>
        <span className="line"></span>
      </ViewInfoBlock>
    </>
  );
}

export default ViewHead;
