//junta todos os componentes para formar a main home-page

import { Header } from '../components/header';
import "./styles/home.css";

export function Home(){
    return (
        <div className="home-page">
            <Header/>
            <h3>homepage testing</h3>
        </div>
    );
}