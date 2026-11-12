import { SearchBar } from "./search-bar.jsx";
import './styles/header.css'

export function Header(){
    return (
        <header className="main-header">
            <h3 className="brand">Cosmic Bookhoard</h3>
            <SearchBar/>
            <nav className="nav">
                <a href="#profile" className="nav-link">profimage</a> 
                <a href="#" className="nav-link home-link">Home</a>
            </nav>
        </header>
    );
}