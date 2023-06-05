import { atom } from "recoil";
import { todoData } from "types";

export default atom<todoData[]>({
    key: "todos",
    default: [],
})