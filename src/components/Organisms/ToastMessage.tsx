import React from 'react';
import Atoms from 'components/Atoms';
import { ModalComplete, ModalError, ModalInfo, ModalAlert } from 'assets/icons';

export type TToastMessage = {
    type: "complete" | "alert" | "error" | "information" | undefined,
    title: string,
    description: string,
    boxShadowColor: 'default' | "complete" | "error",
}

const returnIcon = (type: "complete" | "alert" | "error" | "information" | undefined) => {
    if (type && type === "complete"){
        return ModalComplete
    } else if(type && type === "alert") {
        return ModalAlert
    } else if (type && type === "error"){
        return ModalError
    } else if (type && type === "information"){
        return ModalInfo
    }
    return undefined
}

const returnBoxShadowString = (boxShadowColor: 'default' | "complete" | "error") => {
    if(boxShadowColor && boxShadowColor === "complete"){
        return "0px 4px 4px rgba(39, 174, 96, 0.04), 0px 4px 40px rgba(39, 174, 96, 0.24)"
    } else if(boxShadowColor && boxShadowColor === "error"){
        return "0px 4px 4px rgba(255, 196, 196, 0.04), 0px 4px 40px rgba(255, 196, 196, 0.24)"
    }

    return "0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)"
}


function ToastMessage({type, title, description, boxShadowColor} : TToastMessage){
    let ToastIcon = returnIcon(type);
    let boxShadowStr = returnBoxShadowString(boxShadowColor);
    return(
        <Atoms.Div 
            zIndex="20" 
            position="fixed" 
            top="50%"
            left="50%"
            transform='translate(-50%,-50%)'
            backgroundColor="#ffffff"
            boxShadow={boxShadowStr}
            borderRadius="8px"
            display="flex"
            padding="20px"
            width="calc(394px - 40px)"
            height="calc(100px - 40px)"
            >
            <Atoms.Div display='flex' width="100%" gap="10px">
                <Atoms.Div display='flex' flexDirection='column' width="calc(100% - 56px - 10px)" gap="10px">
                    <Atoms.Title>{title}</Atoms.Title>
                    <Atoms.Span>{description}</Atoms.Span>
                </Atoms.Div>
                <Atoms.Div width="56px" height="56px">
                    {ToastIcon ? <ToastIcon /> : null}
                </Atoms.Div>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default ToastMessage;