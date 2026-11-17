import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function ArticleView() {
    const { id } = useParams(); //pega o id da url
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Aqui você faria a chamada para a sua API do backend
        // Exemplo: fetch(`https://sua-api.com/articles/${id}`)
        //    .then(res => res.json())
        //    .then(data => { setArticle(data); setLoading(false); });

        // Simulando um artigo carregado por enquanto:
        setTimeout(() => {
            setArticle({
                title: `Article #${id}: Title from DB`,
                content: "Aqui vai todo o conteúdo completo do artigo que estava salvo no banco de dados..."
            });
            setLoading(false);
        }, 500);
    }, [id]);

    if (loading) return <p>Loading article...</p>;
    if (!article) return <p>Article not found</p>;

    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>{article.title}</h1>
            <hr />
            <p style={{ marginTop: '20px', lineHeight: '1.6' }}>{article.content}</p>
        </div>
    );
}