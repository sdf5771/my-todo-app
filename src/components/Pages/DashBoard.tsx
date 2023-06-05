import React from 'react';
import Atoms from 'components/Atoms';
import Template from 'components/Template';
import Organisms from 'components/Organisms';

function DashBoard(){
    return(
        <Atoms.Div display='flex' flexDirection='column' width="100vw" height="100vh">
            <Template.Header />
            <Atoms.Div display='flex' flexDirection='column' width="100%" height="calc(100% - 77px)" gap="10px">
                <Organisms.Totalization />
                <Atoms.Div width="calc(100% - 40px)" padding="20px">
                    <Organisms.UserChart />
                </Atoms.Div>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default DashBoard;