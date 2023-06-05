import React, {useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from 'state';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import {todoData} from 'types'
import { useTodo } from 'hooks';

function ToodoForm(){
    const { getTodos } = useTodo()
    const [todos, setTodos] = useRecoilState(todoState); 

    useEffect(() => {
        getTodos()
    }, [])

    return(
        <Atoms.Div 
            display='flex' 
            flexDirection='column' 
            backgroundColor='#ffffff'
            width="calc(100% - 20px)"
            height="calc(100% - 20px)"
            minHeight="400px"
            padding="10px"
            border="1px solid #eaeaea" 
            borderRadius="8px" 
            boxShadow='0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)'
            >
            <Atoms.Span margin="10px 0" fontSize="1.2rem" fontWeight="700" color="#6E41E2">ToDo List</Atoms.Span>
            <Atoms.Ul 
                display="flex" 
                flexDirection='column' 
                width="100%" 
                height="calc(100% - 40px)" 
                padding="0 0 20px 0" 
                overflow='auto' 
                gap="12px">
                {todos && todos.length !== 0 ? todos.map((todo: todoData, index: number) => {
                    return <Molecules.TodoElement 
                                key={todo.id} 
                                id={todo.id} 
                                title={todo.title} 
                                status={todo.status} 
                                createDate={todo.createDate} 
                                modifyDate={todo.modifyDate} 
                                completeDate={todo.completeDate}/>
                }) : <Molecules.TodoEmpty />}
            </Atoms.Ul>
            <Molecules.TodoCreateInput />
        </Atoms.Div>
    )
}

export default ToodoForm;