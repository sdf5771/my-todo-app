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
            height="500px"
            padding="10px"
            >
            <Atoms.Span margin="10px 0" fontSize="1.2rem" fontWeight="700">ToDos</Atoms.Span>

            <Molecules.TodoCreateInput />
        </Atoms.Div>
    )
}

export default ToodoForm;