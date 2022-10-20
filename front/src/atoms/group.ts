import {atom} from "recoil";


const groupState = atom<number>({
    key: "groupState ",
    default: 2,
});

export default groupState;
