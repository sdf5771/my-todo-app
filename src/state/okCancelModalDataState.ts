import {atom} from 'recoil'

export default atom({
    key: "OkCancelModalDataState",
    default: {
        type: "", 
        title: "", 
        description: "", 
        isUseCancel: true, 
        okBtnClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => {}, 
        cancelBtnClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => {},
    }
})