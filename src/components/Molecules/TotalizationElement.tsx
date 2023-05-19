import React from 'react';
import Atoms from 'components/Atoms';

type TTotalizationElement={
    icon?: React.FunctionComponent,
    title: string,
    value: string,
    color: "default" | "purple"
}

function TotalizationElement({icon: IconComponent, title, value, color}:TTotalizationElement){
    return(
        <Atoms.Div 
            display="flex" 
            flex="1"
            width="calc(300px - 32px)" 
            height="calc(126px - 32px)"
            padding="16px"
            backgroundColor={color === 'purple' ? "rgb(110, 65, 226, 0.16)" : "rgb(110, 65, 226, 0.04)"}
            borderRadius="8px"
            gap="10px"
            alignItems='center'
            >
                <Atoms.Div display='flex' justifyContent='center' alignItems='center' width="56px" height="56px">
                    {IconComponent ? <IconComponent /> : null}
                </Atoms.Div>
                <Atoms.Div display='flex' flexDirection='column' width="calc(100% - 56px - 10px)" gap="5px">
                    <Atoms.Span 
                        fontFamily='Roboto' 
                        fontWeight="700" 
                        fontSize="1.2rem" 
                        lineHeight="24px" 
                        color="#6e41e2">{title}</Atoms.Span>
                    <Atoms.Span 
                        fontFamily='Roboto' 
                        fontWeight="600" 
                        fontSize="1rem" 
                        lineHeight="24px" 
                        color="#6e41e2">{value}개</Atoms.Span>
                </Atoms.Div>
        </Atoms.Div>
    )
}

export default TotalizationElement;