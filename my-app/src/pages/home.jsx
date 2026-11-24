//junta todos os componentes para formar a main home-page
import "./styles/home.css";
import { ArticleCard } from '../components/art-card';
import { useState, useEffect } from 'react';

export function Home(){
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/articles/home')
            .then((res) => res.json())
            .then((data) => {
                // O controller list devolve o array de artigos direto
                if (Array.isArray(data)) {
                    setArticles(data);
                }
            })
            .catch((err) => console.error("Erro ao carregar artigos na home:", err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="home-page">
            <div className="feed-container" style={{padding: "20px"}}>
                {isLoading ? (
                    <p>Loading articles...</p>
                ) : articles.length > 0 ? (
                    articles.map((art) => (
                        <ArticleCard 
                            key={art.id}
                            id={art.id}
                            title={art.titulo}
                            author={art.autor}
                        />
                    ))
                ) : (
                    <p>No articles published yet.</p>
                )}
            </div>
            <h3>Upload an article!</h3>
        </div>
    );
}