import React from 'react';
import Atoms from 'components/Atoms';
import Organisms from 'components/Organisms';
import Template from 'components/Template'

function Main () {
    return (
        <Atoms.Div display='flex' flexDirection='column' width="100vw" height="100vh">
            <Template.Header />
            <Atoms.Div display='flex' padding="20px" gap="20px" width="calc(100% - 40px)" height="calc(100% - 77px - 40px)">
                <Organisms.TodoForm /> 
                {/* <Atoms.Div width="400px">

                </Atoms.Div> */}
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default Main;