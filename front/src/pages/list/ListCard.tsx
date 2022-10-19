import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilValue, useResetRecoilState, useRecoilState } from "recoil";
import * as L from "./List.styled";
import listsState from "../../atoms/search";

// <div>
// {lists.map((list, index) => {
//   console.log(list);
//   return <div key={index}>{list["Title"]}</div>;
// })}
// </div>


function ListCard() {
  const navigate = useNavigate();
  const lists=useRecoilValue(listsState)

  useEffect(() => {
    console.log("list",lists)
    // const lists=useRecoilValue(listsState)
  }, [lists]);

  return (
<L.CardLayout>
    {lists.map((list, index) => {
        console.log(list);
        return (<L.Card key={index}>
        <L.CardHeader>
            <L.CardHeaderProfile>
            </L.CardHeaderProfile>
            <L.CardHeaderText>
            {list["User"]}  
            </L.CardHeaderText>
        </L.CardHeader>
        <L.CardHeaderImage src={`../../../../back/${list["Thumbnail"]}`}/>
        <L.CardBottom>
            <L.CardBottomTitle>
            {list["Title"]}  
            </L.CardBottomTitle>
            <L.CardBottomDate>
            {list["CreationTime"]}
            </L.CardBottomDate>
        </L.CardBottom>
        </L.Card>)
      })}
</L.CardLayout>
     
   
  );
}

export default ListCard;
