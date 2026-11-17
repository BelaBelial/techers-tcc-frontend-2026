import { useState } from 'react'
import { Home } from './pages/home'
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Layout } from "./components/layout";
import { Profile } from './pages/profile';
import { AddArticle } from './pages/add-art';
import { ArticleView } from "./pages/art-view"

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* rota pai, todas as outras vem aqui dentro */}
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} /> 

                    {/* essa rota le o artigoo baseaddo no id */}
                    <Route path="article/:id" element={<ArticleView />}/>  
                    <Route path="profile" element={<Profile />} />
                    <Route path='add-article' element={<AddArticle/>}/>
                </Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;