import { useState } from "react";
import "./styles/search-bar.css"
const icon_path = "../assets/search-icon.png";

export function SearchBar(){

    const [termo, setTermo] = useState('');

    //funcao da busca aq
    function buscar (evento){
        evento.preventDefault();
        //coisas que a funcao vai fazer
    }

    //retornando o objetoo em si (html)
    return (
        <form onSubmit={buscar} method="get" action="" className="search">
            <input
                className="box"
                type="text" 
                placeholder="Search For Topic"
                value={termo}
                onChange={(e) => setTermo(e.target.value)}
            />
            
            <button type="submit">
                {/* <img src="../assets/search-icon2.png" alt="Search" className="search-icon"/> */}
                🔍︎
            </button>
        </form>
    );
}