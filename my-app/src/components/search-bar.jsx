import { useState } from "react";
import "./styles/search-bar.css"
const path = "../assets/search-icon.webp";

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
            
            <button type="submit"><img src="" alt="" /></button>
        </form>
    );
}