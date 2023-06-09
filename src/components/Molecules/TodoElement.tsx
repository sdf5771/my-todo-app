import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import { todoData } from 'types';
import { CloseSmall } from 'assets/images'
import { useTodo } from 'hooks';

function TodoElement({id, title, status, createDate, modifyDate, completeDate}: todoData){
    const {deleteTodo} = useTodo();
    return(
        <Atoms.Li 
            display='flex' 
            padding="12px" 
            height={status === 'ready' ? "26px" : "28px"}
            border={status === 'ready' ? "1px solid #eaeaea" : "0px"}
            backgroundColor={status === 'ready' ? "" : "#AAA4DA"}
            borderRadius="8px"
            // boxShadow='0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)' 
            justifyContent='space-between' 
            alignItems='center'
            transition="background-color 0.4s ease"
            >
            <Atoms.Div display='flex' gap="10px">
                <Molecules.TodoCompleteBtn id={id} status={status} />
                <Atoms.Span 
                    fontFamily='Roboto' 
                    fontWeight="400" 
                    fontSize="1rem" 
                    lineHeight="24px"
                    color={status === 'ready' ? "" : "#ffffff"}
                    textDecoration={status === "complete" ? "line-through" : ""}
                    >{title}</Atoms.Span>
            </Atoms.Div>
            <Atoms.Div 
                display="flex"
                justifyContent='center'
                alignItems='center'
                cursor='pointer' 
                borderRadius="4px"
                hoverBackgroundColor="#eaeaea"
                transition='0.4s ease'
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                    deleteTodo({id: id});
                }}>
                <CloseSmall />
            </Atoms.Div>
        </Atoms.Li>
    )
}

export default TodoElement;