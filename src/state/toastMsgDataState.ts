import { atom } from "recoil";

export default atom({
    key: "toastMsgDataState",
    default: {
        type: "",
        title: "",
        description: "",
        boxShadowColor: "",
    },
})