import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import { UserCharacter } from 'assets/lotties';
import Atoms from 'components/Atoms';

type THeaderUserInfo = {
    userName: string;
}

function HeaderUserInfo({userName}: THeaderUserInfo){
    const navigate = useNavigate();

    const userInfoOnClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        localStorage.removeItem('userName');

        navigate('/login');
    } 

    return(
        <Atoms.Div display="flex" justifyContent='center' alignItems='center' gap="20px" cursor="pointer" onClick={userInfoOnClickHandler}>
            <Atoms.Span fontFamily='Roboto' lineHeight="24px" fontSize="1rem" fontWeight="400" color="#6E41E2">{userName}</Atoms.Span>
            <Atoms.Div display='flex' justifyContent='center' alignItems='center' width="44px" height="44px" borderRadius="22px" backgroundColor="#F1F1F1">
                <Lottie animationData={UserCharacter} />
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default HeaderUserInfo;