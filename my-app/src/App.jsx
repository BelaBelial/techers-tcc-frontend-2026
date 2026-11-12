import { useState } from 'react'
import { Home } from './pages/home'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Layout } from "./components/layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* rota pai, todas as outras vem aqui dentro */}
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;