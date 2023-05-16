import { atom } from "recoil";

export default atom({
    key: "okCancelModalIsOpenState",
    default: {
        modalOpen: false,
    }
})