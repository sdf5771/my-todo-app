import React, {useEffect, useState} from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import { TodoAllIcon, TodoCompleteIcon, TodoReadyIcon } from 'assets/icons';
import { useTodo } from 'hooks';

function Totalization(){
    const {getTodosCount} = useTodo();
    const [countObj, setCountObj] = useState({
        total: 0,
        ready: 0,
        complete: 0,
    });

    useEffect(() => {
        setCountObj(getTodosCount())
    },[])
    
    return (
        <Atoms.Div display="flex" width="calc(100% - 40px)" gap="20px" padding="20px">
            <Molecules.TotalizationElement icon={TodoAllIcon} title="Total" value={countObj.total.toString()} color='default'/>
            <Molecules.TotalizationElement icon={TodoReadyIcon} title="Ready" value={countObj.ready.toString()} color='default'/>
            <Molecules.TotalizationElement icon={TodoCompleteIcon} title="Complete" value={countObj.complete.toString()} color='purple'/>
        </Atoms.Div>
    )
}

export default Totalization;