import styled from "styled-components";
import main1 from "../../assets/img/메인1.png";
import button1 from "../../assets/img/btn_동참하기.png";

export const Main1Layout = styled.div`
  display: flex;
  width: auto;
  height: 700px;
  font-family: "Noto Sans KR";
  background-image: url(${main1});
`;

export const Main1Box = styled.div`
  width: 100%;
  margin-left: auto;
  margin-top: 250px;
  margin-right: 100px;
`;
export const Text1 = styled.div`
  font-size: 50px;
  font-weight: 800;
  text-align: right;
  margin: 10px 0;
`;

export const Button1 = styled.div`
  display: block;
  width: 180px;
  height: 45px;
  background-image: url(${button1});
  background-size: contain;
  background-repeat: no-repeat;
  float: right;
  margin-top: 15px;
`;
