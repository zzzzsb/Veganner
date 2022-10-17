import {Restaurant} from "../../types/restaurant";
import ResitemDetail from "./ResitemDetail";
import * as S from "../../pages/map/Map.styled"


interface ItemProps {
    item:Restaurant;
}



function Resitem({item}: ItemProps) {
    return (
        <S.restaurant onClick={() => ResitemDetail}>
            <S.h2>
                {item.name}
            </S.h2>
            <S.p>주소 : {item.location}</S.p>

            <S.box>
                {item.industry}
            </S.box>
            <S.box>
                {item.food}
            </S.box>
        </S.restaurant>
        
    );

}

export default Resitem;