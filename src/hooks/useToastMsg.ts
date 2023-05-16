import React from 'react';
import { useRecoilState } from 'recoil';
import { toastMsgIsOpenState, toastMsgDataState } from 'state'

function useToastMsg(){
    const [toastMsg, setToastMsg] = useRecoilState(toastMsgIsOpenState);
    const [toastMsgData, setToastMsgData] = useRecoilState(toastMsgDataState);

    const setToastOpen = (interval: number) => {
        setToastMsg({isOpen: true})

        setTimeout(() => {
            setToastMsg({isOpen: false})
        }, interval)
    }
    
    return {toastMsg, setToastOpen, toastMsgData, setToastMsgData}
}

export default useToastMsg;