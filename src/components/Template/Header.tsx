import React,{useState, useEffect} from 'react';
import Atoms from 'components/Atoms';
import Organisms from 'components/Organisms';
import Molecules from 'components/Molecules';

function Header(){
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storageData = localStorage.getItem('userName');

        if(storageData){
            console.log(storageData)
            setUserName(storageData);
        }
    }, [])

    return (
        <Atoms.Div display="flex" justifyContent='space-between' alignItems='center' width="calc(100% - 24px)" padding="0 12px" height="76px" borderBottom="1px solid #e7e7e7">
            <Molecules.HeaderLogo />
            <Atoms.Div display='flex' justifyContent='center' alignItems='center' gap="30px">
                {userName !== '' ? <><Organisms.GNBMenu /><Molecules.HeaderUserInfo userName={userName} /></> : null}
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default Header;