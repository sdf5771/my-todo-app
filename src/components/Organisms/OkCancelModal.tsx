import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import { ModalComplete, ModalError, ModalInfo } from 'assets/icons';

type TOkCancelModal = {
    type: "complete" | "error" | "information",
    title: string,
    description: string,
    isUseCancel: boolean,
    okBtnClickHandler: React.MouseEventHandler<HTMLButtonElement>,
    cancelBtnClickHandler: React.MouseEventHandler<HTMLButtonElement>,
}

const returnIcon = (type: "complete" | "error" | "information") => {
    if (type && type === "complete"){
        return ModalComplete
    } else if (type && type === "error"){
        return ModalError
    } else if (type && type === "information"){
        return ModalInfo
    }
    return undefined
}

function OkCancelModal({type, title, description, isUseCancel, okBtnClickHandler, cancelBtnClickHandler}: TOkCancelModal){
    let ModalIcon = returnIcon(type);

    return(
        <Atoms.Div 
            display="flex" 
            flexDirection='column' 
            width="calc(394px - 40px)" 
            height="calc(164px - 40px)" 
            backgroundColor="#ffffff"
            boxShadow='0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)'
            borderRadius="8px"
            padding="20px"
            >
            <Atoms.Div display='flex' gap="10px" width="100%">
                <Atoms.Div display="flex" flexDirection='column' width="calc(100% - 66px)">
                    <Atoms.Title>{title}</Atoms.Title>
                    <Atoms.Span>{description}</Atoms.Span>
                </Atoms.Div>
                <Atoms.Div width="56px" height="56px">
                    {ModalIcon ? <ModalIcon /> : null}
                </Atoms.Div>
            </Atoms.Div>
            <Atoms.Div width="100%">
                <Molecules.OkCancelBtn isUseCancel={isUseCancel} okBtnClickHandler={okBtnClickHandler} cancelBtnClickHandler={cancelBtnClickHandler} />
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default OkCancelModal;