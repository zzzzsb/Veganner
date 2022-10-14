// import Location from '../../datas/seoul.json'

// const location = Location.data;
interface ListProps {
    item: any;
    idx: number;
    res_id: number
}
function ResList({item, idx, res_id}: ListProps) {
    return (
        <div key={idx} className="restaurant">
            <h3>
                {`${item[res_id].name}`}
            </h3>
        <p>주소 : {`${item[res_id].location}`}</p>
        <p>전화번호 : `${item[res_id].number}`</p>
        </div>
        
    );

}

export default ResList;