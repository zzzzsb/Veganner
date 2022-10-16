import styled from "styled-components";


// 전체 
export const Title = styled.section`
    margin: 10px auto;
    font-size: 25px;
    text-align: center;
`
export const Layout = styled.section`
  position: flex;
  margin: 0 auto;
  width: 1400px;
  height: 1400px;
  border-radius: 3px 5px 8px 10px;

`;

//
export const resList = styled.div`
    position:flex;
    border-radius: 3px 5px 8px 10px;
`


export const searchContainer = styled.div`
`

// 카테고리 버튼
export const selectBox1 = styled.div`
    position: flex;
    width: 100px;
    height: 25px;
    border-radius: 5px;
    border: 2px solid #004D43;
    background: #004D43 calc(100% - 7px) center no-repeat;
    background-size: 10px;
    cursor: pointer;
    
    :after {
        content: '';
        display: block; 
        width: 2px;
        height: 100%; 
        position: absolute; 
        top: 0; 
        right: 35px;
        background: white;
    }


`

export const select_location = styled.button`
    display: flex;
    align-items: center;
    width: inherit;
    height: inherit;
    border: 0 none;
    outline: 0 none;
    padding-left: 15px;
    background: transparent;
    cursor: pointer;

`
export const optionList = styled.ul`
    // position: absolute; 
    // top: 28px;
    // left: 0;
    // width: 100%;
    // background: lightcoral;
    // color: #fff;
    // list-style-type: none;
    // padding: 0;
    // border-radius: 6px;
    // overflow: hidden;
    // max-height: 0;
    // transition: .3s ease-in;

    
`
export const optionitem = styled.li`
    // border-bottom: 1px dashed rgb(170, 72, 72);
    // padding: 5px 15px 5px;
    // transition: .1s;

    // :hover {
    //     background: rgb(175, 93, 93);
    // }

    // :last-child {
    //     border-bottom: 0 none;
    // }
    

`







export const resContainer = styled.div`
    position: flex;
    width: 500px;
    height: 1400px;

    background: #FFFFFF;

`
// 식당 리스트 1개
export const restaurant = styled.div`
    height: 100px;
    border-color: #F1F1F1;
    border-style: none none solid none;
    border-width: 2px;
    background: #FFFFFF;
    
`
export const pagination = styled.div`
    position: flex;
`


// MainMap
export const MainMap = styled.div`
    position: flex;
    height: 100%;
    width: 100%;
`