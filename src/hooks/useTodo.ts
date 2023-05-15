import React from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from 'state';
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
        
        if(prevData){
            let parseData = JSON.parse(prevData);
            
            let result = parseData.filter((todo:todoData) => {
                if(todo.id !== id){
                    return todo
                }
            })

            localStorage.setItem(TODO_KEY, JSON.stringify(result));
            setTodos(result)
            return true    
        } 
        return false
    }

    const getTodos = () => {
        let todos = localStorage.getItem(TODO_KEY)

        if(!todos) return

        setTodos(JSON.parse(todos))
    }
    
    return {createTodo, toggleStatus, deleteTodo, getTodos}
}

export default useTodo;