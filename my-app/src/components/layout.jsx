import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { AddButton } from './add-button';
import "./styles/layout.css"

export function Layout() {
    return (
        <div className='layout-container' style={{width: '100%'}}>
            <Header />
            <main className='main-content'>
                <Outlet /> {/* O React Router injeta qualquer pagina aqui */}
            </main>
            <AddButton/>           
            <Footer />
        </div>
    );
}
