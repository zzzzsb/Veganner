import {Restaurant} from "../../types/restaurant";
import * as S from "../../pages/map/Map.styled";

interface ItemProps {
    item:Restaurant;
}
function ResitemDetail({item}: ItemProps) {
    return (
        <S.restaurant>
            <h3>{`${item.name}`}</h3>
            <p>주소 : {`${item.location}`}</p>
            <p>전화번호 : {`${item.number}`}</p>
        </S.restaurant>
        
    );

}

export default ResitemDetail;