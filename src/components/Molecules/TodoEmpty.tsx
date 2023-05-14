import React from 'react';
import Lottie from 'lottie-react'
import Atoms from 'components/Atoms';
import {EmptyTodoAnimation} from 'assets/lotties'

function TodoEmpty(){
    return(
        <Atoms.Div display="flex" flexDirection='column' justifyContent='center' alignItems='center' width="100%" height="100%" gap="10px">
            <Atoms.Div width="300px" height="300px">
                <Lottie animationData={EmptyTodoAnimation}/>
            </Atoms.Div>
            <Atoms.Span fontFamily='Roboto' fontWeight="700" fontSize="1.2rem">생성된 할 일이 없어요.</Atoms.Span>
            <Atoms.Span fontFamily='Roboto' fontWeight="400" fontSize="0.8rem">할 일을 생성해서 관리해볼까요?</Atoms.Span>
        </Atoms.Div>
    )
}

export default TodoEmpty;