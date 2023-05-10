import React from 'react';
import Atoms from 'components/Atoms';

type TGNBMenuElement = {
    menuId: number,
    menuName: string,
    onClickHandler: React.MouseEventHandler<HTMLDivElement>,
    isActive: {activeMenuId: number},
}

function GNBMenuElement({menuId, menuName, onClickHandler, isActive}:TGNBMenuElement){
    return (
        <Atoms.MenuContainer 
            onClick={onClickHandler}
            display="flex"
            position="relative"
            justifyContent='center'
            alignContent='center'
            isActive={menuId === isActive.activeMenuId ? true : false}
            cursor="pointer"
        >
            <Atoms.Span 
                fontFamily='Roboto' 
                fontWeight="400" 
                fontSize="1rem" 
                lineHeight="24px" 
                color="#111111">{menuName}</Atoms.Span>
        </Atoms.MenuContainer>
    )
}

export default GNBMenuElement;