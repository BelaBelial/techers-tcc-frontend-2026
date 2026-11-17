import { useState } from 'react'
import { Home } from './pages/home'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Layout } from "./components/layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* rota pai, todas as outras vem aqui dentro */}
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} /> 

                    {/* essa rota le o artigoo baseaddo no id */}
                    {/* <Route path="article/:id" element={<ArticleView />}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;