import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';

function ToodoForm(){
    return(
        <Atoms.Div 
            display='flex' 
            flexDirection='column' 
            backgroundColor='#ffffff' 
            borderRadius='12px'
            minWidth="200px"
            maxWidth="300px"
            width="100%"
            height="100%"
            padding="10px"
            >
            <Atoms.Span fontSize="1.2rem">ToDos</Atoms.Span>

            <Molecules.TodoCreateInput />
        </Atoms.Div>
    )
}

export default ToodoForm;