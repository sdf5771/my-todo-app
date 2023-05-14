import React from 'react';
import Atoms from 'components/Atoms';
import {MainLogo} from 'assets/icons';

function HeaderLogo(){
    return(
        <Atoms.Div display="flex" gap="10px" justifyContent='center' alignItems='center'>
            <MainLogo />
            <Atoms.Span fontSize="1.6rem" color="#6E41E2" fontWeight="700">MY TODO</Atoms.Span>
        </Atoms.Div>
    )
}

export default HeaderLogo;