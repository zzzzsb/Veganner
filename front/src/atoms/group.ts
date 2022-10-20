import {atom} from "recoil";


const groupState = atom<number>({
    key: "groupState ",
    default: 0,
});

export default groupState;
