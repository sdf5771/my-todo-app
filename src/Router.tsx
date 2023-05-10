import React, {useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { MainPage, NotFoundPage, Login, DashBoard } from 'components/Pages';

function Router() {
    const navigate = useNavigate();
    useEffect(() => {
        const userName = localStorage.getItem('userName');

        if(!userName){
            navigate('/login');
        }

    }, [navigate])

    return(
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path="dashboard" element={<DashBoard />} />            
            <Route path="login" element={<Login />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default Router