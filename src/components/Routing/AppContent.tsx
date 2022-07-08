import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from '../Pages/HomePage/HomePage';

export const AppContent = () => {
    return (
        <Routes>
            <Route index element={<HomePage/>}/>
        </Routes>
    );
};