import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import { notFoundAnimation } from 'assets/lotties';
import Atoms from 'components/Atoms';

function NotFound(){
    const navigate = useNavigate();
    return(
        <Atoms.Div display='flex' flexDirection='column' justifyContent='center' alignItems='center' width="100vw" height="100vh">
            <Atoms.Div display="flex" justifyContent='center' width="100%">
                <Atoms.Span fontSize="30px" fontWeight="700">404 Error, Not Found</Atoms.Span>
            </Atoms.Div>
            <Atoms.Div width="600px" height="400px" marginTop="30px">
                <Lottie animationData={notFoundAnimation} />
            </Atoms.Div>
            <Atoms.Div display='flex' flexDirection='column' gap="30px" alignItems='center' width="100%">
                <Atoms.Span>요청하신 페이지가 사라졌거나, 잘못된 경로로 이동하셨습니다.</Atoms.Span>
                <Atoms.Button onClick={() => {navigate('/')}} width="200px" height="40px" borderRadius="12px" border="2px solid black">메인으로 가기</Atoms.Button>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default NotFound;