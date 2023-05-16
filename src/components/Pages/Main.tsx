import React from 'react';
import { useRecoilState } from 'recoil';
import { okCancelModalIsOpenState ,okCancelModalDataState } from 'state';
import { useToastMsg } from 'hooks';
import Atoms from 'components/Atoms';
import Organisms from 'components/Organisms';
import Template from 'components/Template'

function Main () {
    const [okCancelModalIsOpen, setOkCancelModalIsOpen] = useRecoilState(okCancelModalIsOpenState);
    const [okCancelModalData, setOkCancelModalData] = useRecoilState(okCancelModalDataState);
    const { toastMsg, toastMsgData } = useToastMsg();

    return (
        <Atoms.Div display='flex' flexDirection='column' width="100vw" height="100vh">
            <Template.Header />
            <Atoms.Div display='flex' padding="20px" gap="20px" width="calc(100% - 40px)" height="calc(100% - 77px - 40px)">
                <Organisms.TodoForm /> 
                {/* <Atoms.Div width="400px">

                </Atoms.Div> */}
            </Atoms.Div>
            {okCancelModalIsOpen && okCancelModalIsOpen.modalOpen 
            ? <Organisms.OkCancelModal 
                type={okCancelModalData.type === "complete" || okCancelModalData.type === "alert" || okCancelModalData.type === "error" || okCancelModalData.type === "information" ? okCancelModalData.type : undefined}
                title={okCancelModalData.title ? okCancelModalData.title : ""}
                description={okCancelModalData.description ? okCancelModalData.description : ""}
                isUseCancel={okCancelModalData.isUseCancel ? okCancelModalData.isUseCancel : false}
                okBtnClickHandler={okCancelModalData.okBtnClickHandler ? okCancelModalData.okBtnClickHandler : undefined}
                cancelBtnClickHandler={okCancelModalData.cancelBtnClickHandler ? okCancelModalData.cancelBtnClickHandler : undefined}
                /> 
            : null}
            {toastMsg.isOpen 
            ? <Organisms.ToastMessage 
                type={toastMsgData.type === "complete" || toastMsgData.type === "alert" || toastMsgData.type === "error" || toastMsgData.type === "information" ? toastMsgData.type : undefined} 
                title={toastMsgData.title} 
                description={toastMsgData.description} 
                boxShadowColor={toastMsgData.boxShadowColor === 'complete' || toastMsgData.boxShadowColor === 'error' ? toastMsgData.boxShadowColor : 'default'} 
                /> : null}
        </Atoms.Div>
    )
}

export default Main;