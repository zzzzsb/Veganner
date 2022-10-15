import {Restaurant} from "../../types/restaurant";

interface ItemProps {
    item:Restaurant;
}
function Resitem({item}: ItemProps) {
    return (
        <div className="restaurant">
            <h3>
                {`${item.name}`}
            </h3>
        <p>주소 : {`${item.location}`}</p>
        
        </div>
        
    );

}

export default Resitem;