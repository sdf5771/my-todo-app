import React from 'react';
import Atoms from 'components/Atoms';
import Organisms from 'components/Organisms';

function Main () {
    return (
        <Atoms.Div display='flex' width="100vw" height="100vh" backgroundColor='#e0e0e0'>
            <Organisms.TodoForm />
        </Atoms.Div>
    )
}

export default Main;