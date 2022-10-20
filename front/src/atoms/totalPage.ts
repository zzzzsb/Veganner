import {atom} from "recoil";


const totalPagingState = atom<number>({
    key: "totalPageState",
    default: 1,
});

export default totalPagingState;
