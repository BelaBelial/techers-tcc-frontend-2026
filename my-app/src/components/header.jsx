import { SearchBar } from "./search-bar.jsx";
import './styles/header.css'
import { Link } from "react-router-dom";

export function Header(){
    return (
        <header className="main-header">
            <h3 className="brand">Cosmic Bookhoard</h3>
            <SearchBar/>
            <nav className="nav">
                <a href="#profile" className="nav-link person">𖨆</a> 
                <Link to="/" className="nav-link home-link">Home</Link>
            </nav>
        </header>
    );
}