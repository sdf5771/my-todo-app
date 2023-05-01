import React from 'react';
import Atoms from 'components/Atoms';

function TodoCreateInput(){
    return(
        <Atoms.Div display='flex' gap="5px">
            <Atoms.Input border="0px" backgroundColor="#f2f2f2" placeholder='할 일을 입력해주세요.' placeholderColor="#cecece"/>
            <Atoms.Button border="1px solid #e0e0e0" borderRadius="8px">asdasd</Atoms.Button>
        </Atoms.Div>
    )
}

export default TodoCreateInput;