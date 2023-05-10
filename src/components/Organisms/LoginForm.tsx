import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Atoms from 'components/Atoms';
import Lottie from 'lottie-react';
import { TodoMainImage } from 'assets/lotties';

function LoginForm(){
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    const buttonOnClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(inputValue !== ''){
            localStorage.setItem('userName', inputValue)
            navigate('/');
        } else {
            alert('사용할 이름 혹은 닉네임을 입력해주세요!')
        }
    }

    return (
        <Atoms.Div width="800px" height="600px" border="1px solid #eaeaea" borderRadius="8px" boxShadow='0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)'>
            <Atoms.Div display="flex" flexDirection='column' justifyContent='center' alignItems='center' width="100%" height="100%">
                <Atoms.Div display='flex' justifyContent='center' alignItems='center' width="350px" height="350px">
                    <Lottie animationData={TodoMainImage} />
                </Atoms.Div>
                <Atoms.Div display="flex" flexDirection='column' gap="20px" justifyContent='center' alignItems='center'>
                    <Atoms.Span fontFamily='Montserrat' fontWeight="700" fontSize="32px" lineHeight="40px">일정을 관리하기 위해 이름을 입력하세요!</Atoms.Span>
                    <Atoms.Span fontFamily='Roboto' fontSize="13px" lineHeight="20px" fontWeight="400">당신의 정보는 모두 당신의 브라우저에만 저장됩니다.</Atoms.Span>
                </Atoms.Div>
                <Atoms.Div marginTop="25px" display="flex" justifyContent='center' alignItems='center' flexDirection='column' width="100%" gap="20px">
                    <Atoms.UserLoginInput 
                        width="410px" 
                        placeholder='Your Name or Nick name'
                        value={inputValue}
                        onChange={(event:React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
                        />
                    <Atoms.Button 
                        width="410px" 
                        height="44px" 
                        borderRadius="4px" 
                        background="#6E41E2"
                        fontFamily='Roboto'
                        fontWeight="400"
                        fontSize="1rem"
                        lineHeight="24px"
                        color="#ffffff"
                        onClick={buttonOnClickHandler}
                        >시작하기</Atoms.Button>
                </Atoms.Div>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default LoginForm