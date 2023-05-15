import React from 'react';
import Atoms from 'components/Atoms';

type TOkCancelBtn = {
    isUseCancel: boolean,
    okBtnClickHandler: React.MouseEventHandler<HTMLButtonElement>,
    cancelBtnClickHandler: React.MouseEventHandler<HTMLButtonElement>,
}

function OkCancelBtn({isUseCancel, okBtnClickHandler, cancelBtnClickHandler}:TOkCancelBtn){
    return (
        <Atoms.Div display="flex" gap="5px">
            <Atoms.Button 
                width="79px" 
                height="42px" 
                border="2px solid #6E41E2" 
                borderRadius="4px" 
                fontFamily='Roboto'
                fontWeight="400"
                fontSize="1rem"
                lineHeight="24px"
                onClick={okBtnClickHandler}>확인</Atoms.Button>

                {isUseCancel 
                ? <Atoms.Button 
                    width="79px" 
                    height="42px" 
                    border="2px solid #6E41E2" 
                    borderRadius="4px" 
                    fontFamily='Roboto'
                    fontWeight="400"
                    fontSize="1rem"
                    lineHeight="24px"
                    onClick={cancelBtnClickHandler}>취소</Atoms.Button> : null}
        </Atoms.Div>
    )
}

export default OkCancelBtn;