import {Restaurant} from "../../types/restaurant";

interface ItemProps {
    item:Restaurant;
}
function ResitemDetail({item}: ItemProps) {
    return (
        <div className="restaurant">
            <h3>{`${item.name}`}</h3>
            <p>주소 : {`${item.location}`}</p>
            <p>전화번호 : {`${item.number}`}</p>
        </div>
        
    );

}

export default ResitemDetail;