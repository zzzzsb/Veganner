import { Restaurant } from "../../types/restaurant";
import * as S from "../../pages/map/Map.styled";
import { Link } from "react-router-dom";

interface ItemProps {
  item: Restaurant;
}

function Resitem({ item }: ItemProps) {
  return (
    <>
      <Link to={`./detail/${item.index}`}>
        <S.restaurant>
          <S.h2>{item.name}</S.h2>
          <S.p>주소 : {item.location}</S.p>
          <S.box>{item.industry}</S.box>
          <S.box>{item.food}</S.box>
        </S.restaurant>
      </Link>
    </>
  );
}

export default Resitem;
