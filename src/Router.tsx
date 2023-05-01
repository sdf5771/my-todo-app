import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainPage } from 'components/Pages';

function Router() {
    return(
        <BrowserRouter>
            <Route path='/'>
                <MainPage />
            </Route>
        </BrowserRouter>
    )
}

export default Router