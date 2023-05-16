import React from 'react';
import { useRecoilState } from 'recoil';
import { todoState, okCancelModalIsOpenState, okCancelModalDataState } from 'state';
import { todoData } from 'types';

type TcreateTodo = {
    title: string
}

type TdeleteTodo = {
    id : number,
}

function useTodo(){
    const TODO_KEY = 'todos'
    const [todos, setTodos] = useRecoilState(todoState);
    const [okCancelModalIsOpen, setOkCancelModalIsOpen] = useRecoilState(okCancelModalIsOpenState);
    const [okCancelModalData, setOkCancelModalData] = useRecoilState(okCancelModalDataState);

    const createTodo = ({title}: TcreateTodo):void => {
        let prevData = localStorage.getItem(TODO_KEY);

        const dateNow = new Date();
        const year = dateNow.getFullYear();
        const month = dateNow.getMonth() >= 10 ? dateNow.getMonth() : '0' + dateNow.getMonth();
        const day = dateNow.getDate() >= 10 ? dateNow.getDate() : '0' + dateNow.getDate();
        
        let todoObj = {
            id: dateNow.getTime(),
            title: title,
            status: 'ready',
            createDate: `${year}-${month}-${day}`,
            modifyDate: `${year}-${month}-${day}`,
            completeDate: `${year}-${month}-${day}`,
        }

        if (!prevData){
            let newArr = [todoObj];
            localStorage.setItem(TODO_KEY, JSON.stringify(newArr));
        } else {
            let newData = JSON.parse(prevData);
            let newArr = [...newData, todoObj]

            localStorage.setItem(TODO_KEY, JSON.stringify(newArr))
        }
        getTodos()
    }
    
    const toggleStatus = ({id, status}: {id:number, status: "ready" | "complete"}): boolean => {
        let prevData = localStorage.getItem(TODO_KEY);
        if(prevData){
            let parseData = JSON.parse(prevData);
            if(status === "ready"){
                parseData.forEach((todo: todoData) => {
                    if(todo.id === id){
                        todo.status = "complete"
                    }
                })
                localStorage.setItem(TODO_KEY, JSON.stringify(parseData))
                setTodos(parseData)
                return true
            } else if(status === "complete"){
                parseData.forEach((todo: todoData) => {
                    if(todo.id === id){
                        todo.status = "ready"
                    }
                })
                localStorage.setItem(TODO_KEY, JSON.stringify(parseData))
                setTodos(parseData)
                return true
            }
            return false
        }
        return false
    }

    const deleteTodo = ({id}: TdeleteTodo):boolean => {
        let prevData = localStorage.getItem(TODO_KEY);
        let deleteResult = false
        setOkCancelModalIsOpen({modalOpen: true})
        setOkCancelModalData(
            {
                type: "alert",
                title: "정말 삭제할까요?",
                description: "삭제한 할 일은 복구할 수 없어요.",
                isUseCancel: true,
                okBtnClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => {
                    if(prevData){
                        let parseData = JSON.parse(prevData);
                        
                        let result = parseData.filter((todo:todoData) => {
                            if(todo.id !== id){
                                return todo
                            }
                        })
            
                        localStorage.setItem(TODO_KEY, JSON.stringify(result));
                        deleteResult = true
                        setTodos(result)  
                        setOkCancelModalIsOpen({modalOpen: false})
                    } 
                },
                cancelBtnClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => {
                    setOkCancelModalIsOpen({modalOpen: false})
                },
            }
        )
        
        return deleteResult
    }

    const getTodos = () => {
        let todos = localStorage.getItem(TODO_KEY)

        if(!todos) return

        setTodos(JSON.parse(todos))
    }
    
    return {createTodo, toggleStatus, deleteTodo, getTodos}
}

export default useTodo;