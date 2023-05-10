import React from 'react';
import Atoms from 'components/Atoms';
import Organisms from 'components/Organisms';
import Template from 'components/Template'

function Main () {
    return (
        <Atoms.Div display='flex' flexDirection='column' flexWrap='wrap' width="100vw" height="100vh">
            <Template.Header />
        </Atoms.Div>
    )
}

export default Main;