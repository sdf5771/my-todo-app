import React, {useState} from 'react';
import Atoms from 'components/Atoms';
import { useTodo } from 'hooks';

function TodoCreateInput(){
    const [inputVal, setInputVal] = useState("");
    const {createTodo} = useTodo();

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(event.currentTarget.value)
    }

    const onKeyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter' && inputVal !== ""){
            createTodo({title: inputVal});
            setInputVal("");
            alert("할 일이 추가되었습니다.")
        }
    }

    return(
        <Atoms.Div display='flex' gap="5px">
            <Atoms.Input 
                border="0px" 
                backgroundColor="#f2f2f2" 
                placeholder='할 일을 입력해주세요.' 
                placeholderColor="#cecece" 
                maxLength={150}
                onChange={onChangeHandler}
                onKeyUp={onKeyUpHandler}
                value={inputVal}
                />
        </Atoms.Div>
    )
}

export default TodoCreateInput;