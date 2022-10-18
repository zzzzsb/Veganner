import styled from "styled-components";

// 전체
export const Title = styled.section`
  margin: auto;
  font-size: 25px;
  text-align: center;
`;
export const Layout = styled.section`
  display: flex;
  margin: 80px auto;
  width: 1400px;
  height: 100vh;
  border-radius: 5px;
`;

//
export const resMenu = styled.div`
  position: flex;
  border-radius: 3px 5px 8px 10px;
  background: white;
  margin-bottom: 100px;
`;

export const searchContainer = styled.div`
  background: #ffffff;
  margin-bottom: 100px;
`;

export const searchForm = styled.form`
  border-bottom: 2px solid #f1f1f1;
`;

export const search = styled.input`
  border: 2px solid lightgray;
  border-radius: 9999px;
  // box-sizing: border-box;
  font-size: 16px;
  height: 48px;
  margin: 28px 10px 10px 28px;
  padding-left: 20px;
  width: 100%;
`;

// 카테고리 버튼
export const selectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 500px;
  padding: 0 10px 10px 0;
`;
export const selectBox = styled.div`
  width: 80px;
  height: 30px;
  border-radius: 9999px;
  border: 2px solid #004d43;
  background: #ffffff calc(100% - 7px) center no-repeat;
  background-size: 10px;
  margin: 5px 3px 5px 3px;
`;

export const select_button = styled.button`
  // display: block;
  align-items: center;
  text-align: center;
  color: #004d43;
  font-weight: bold;
  width: inherit;
  height: inherit;
  border: 0 none;
  outline: 0 none;
  background: transparent;
`;
export const optionList = styled.ul`
  position: stickey;

  top: 28px;
  left: 0;
  margin: 5px;
  width: 70px;
  border-radius: 5px;
  border: 2px lightgray solid;
  margin: 5px 3px 5px 3px;
  background: #ffffff;
  // color: #fff;
  // list-style-type: none;
  // padding: 0;
  // border-radius: 6px;
  overflow: hidden;
  // max-height: 0;
  transition: 0.3s ease-in;
`;
export const optionitem = styled.li`
  border-bottom: 2px solid lightgray;
  padding: 5px 15px 5px;
  transition: 0.1s;

  text-align: center;
  font-size: 10px;
  background: #ffffff;

  :hover {
    background: #cdea67;
  }
`;

export const resContainer = styled.div`
  position: block;
  width: 500px;
  height: 100%;

  background: #ffffff;
`;
// Resitem
// 식당 리스트 1개
export const restaurant = styled.div`
  // stickey
  // height: 100px;
  display: block;
  border-color: #f1f1f1;
  border-bottom: 2px solid #f1f1f1;
  width: 100%;
  // border-width: 2px;
  // background: #FFFFFF;
  display: block;
  padding: 28px 0 28px 48px;
`;
export const h2 = styled.h2`
  font-weight: 700;
  margin-bottom: 8px;
  position: relative;
`;

export const p = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const box = styled.div`
    
    float: left;
    text-align: center;
    width: 80px;
    height: 30px;
    border-radius: 9999px;
    border: 2px solid #CDEA67;
    background: #CDEA67;
    background-size: 10px;
    margin: 5px 3px 5px 3px;

    font-size: 13px
	box-sizing: border-box; 
`;

export const pagination = styled.div`
  display: block;
`;

// MainMap
export const MainMap = styled.div`
  position: flex;
  height: 100%;
  width: 100%;
`;

// Paging
export const paging = styled.div`
  display: flex;
`;
