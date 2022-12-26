import React from 'react'
import {Route, Link, Routes, useLocation} from 'react-router-dom';
import {Cv} from './Cv'
export const Vizualizador = () => {
    return (
            <Routes>
                    
            <Route path="/Cv" element={<Cv />} />
            </Routes>

    )}