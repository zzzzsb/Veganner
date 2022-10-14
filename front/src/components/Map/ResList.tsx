import Location from '../../datas/seoul.json'

const location = Location.data;
interface ListProps {
    item: string;
    idx: number;
}
function ResList({idx}: ListProps) {
    return (
        <div key={idx} className="restaurant">
            <h3>
                {`${location[idx].name}`}
            </h3>
        <p>주소 : {`${location[idx].location}`}</p>
        <p>전화번호 : `${location[idx].number}`</p>
        </div>
        
    );

}

export default ResList;