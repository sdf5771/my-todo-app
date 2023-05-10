import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, NotFoundPage } from 'components/Pages';

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router