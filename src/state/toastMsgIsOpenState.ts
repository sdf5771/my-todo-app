import { atom } from "recoil";

export default atom({
    key: "toastMsgIsOpenState",
    default: {
        isOpen: false,
    }
})