import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./styles/art-view.css";

export function ArticleView() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://cosmic-bookhoard.vercel.app/articles/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setArticle(data.article);
                } else {
                    setError(data.erro || "Article not found.");
                }
            })
            .catch((err) => {
                console.error("Erro ao carregar artigo:", err);
                setError("Could not connect to the server.");
            })
            .finally(() => setIsLoading(false));
    }, [id]);

    if (isLoading) {
        return <div className="article-view-container"><p>Loading article...</p></div>;
    }

    if (error || !article) {
        return (
            <div className="article-view-container">
                <h2>{error}</h2>
                <Link to="/">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="article-view-container">
            <Link to="/" className="back-link">← Back to Home</Link>
            
            <article className="full-article">
                <h1>{article.titulo}</h1>
                <p className="article-author">By: <strong>{article.autor}</strong></p>
                
                <hr />

                {/* whiteSpace: 'pre-line' mantém as quebras de linha/parágrafos que você digitou no textarea */}
                <div className="article-content" style={{ whiteSpace: 'pre-line' }}>
                    {article.conteudo}
                </div>
            </article>
        </div>
    );
}