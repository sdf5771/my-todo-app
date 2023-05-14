import React from 'react';
import Atoms from 'components/Atoms';
import { CheckImage } from 'assets/images'
import { useTodo } from 'hooks';

function TodoCompleteBtn({id, status}: {id: number,status: "ready" | "complete"}){
    const {toggleStatus} = useTodo();

    const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        let result = toggleStatus({id, status})

        if(result){
            alert("상태가 변경되었습니다.")
        } else {
            alert("상태 변경에 실패하였습니다.")
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
            backgroundColor={status === "complete" ? "#E3DBF9" : ""}
            border={status === 'ready' ? "2px solid #eaeaea" : "2px solid #E3DBF9"}
            onClick={onClickHandler}
            >
            {status === "complete" ? <CheckImage /> : null}
        </Atoms.Div>
    )
}

export default TodoCompleteBtn;