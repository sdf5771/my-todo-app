import React, {useState, useEffect} from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import { useNavigate, useLocation } from 'react-router-dom';

function GNBMenu(){
    const navigate = useNavigate();
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState({
        activeMenuId: 0,
    });

    useEffect(() => {
        switch(location.pathname){
            case '/':
                setActiveMenu({activeMenuId: 1})
                break
            case '/dashboard':
                setActiveMenu({activeMenuId: 2})
                break
            default :
                setActiveMenu({activeMenuId: 0})
                break
        }
    }, [location])
    
    return(
        <Atoms.Div display="flex" gap="24px">
            <Molecules.GNBMenuElement menuId={1} menuName='Main' onClickHandler={(event: React.MouseEvent) => navigate('/')} isActive={activeMenu} />
            <Molecules.GNBMenuElement menuId={2} menuName='DashBoard' onClickHandler={(event: React.MouseEvent) => navigate('/dashboard')} isActive={activeMenu} />
        </Atoms.Div>
    )
}

export default GNBMenu;