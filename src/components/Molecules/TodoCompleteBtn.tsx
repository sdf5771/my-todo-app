import React from 'react';
import Atoms from 'components/Atoms';
import { CheckImage } from 'assets/images'
import { useTodo, useToastMsg } from 'hooks';

function TodoCompleteBtn({id, status}: {id: number,status: "ready" | "complete"}){
    const {toggleStatus} = useTodo();
    const {setToastOpen, setToastMsgData} = useToastMsg();

    const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        let result = toggleStatus({id, status})

        if(result){
            setToastMsgData({type:"complete", title: "Complete", description: "성공적으로 할 일의 상태가 변경되었어요.", boxShadowColor: "complete"});
            setToastOpen(2000);
        } else {
            setToastMsgData({type:"error", title: "Error", description: "할 일의 상태 변경에 실패했어요.", boxShadowColor: "Error"});
            setToastOpen(2000);
        }
    }

    return(
        <Atoms.Div 
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            width="20px" 
            height="20px" 
            borderRadius="12px"
            cursor='pointer'
            backgroundColor={status === "complete" ? "#ffffff" : ""}
            border={status === 'ready' ? "2px solid #eaeaea" : "2px solid #ffffff"}
            onClick={onClickHandler}
            >
            {status === "complete" ? <CheckImage /> : null}
        </Atoms.Div>
    )
}

export default TodoCompleteBtn;