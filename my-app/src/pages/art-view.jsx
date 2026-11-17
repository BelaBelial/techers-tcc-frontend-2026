import { useParams } from 'react-router-dom';
// import "./styles/article-view.css";

export function ArticleView() {
    const { id } = useParams();

    return (
        <div className="article-view-container">
            <h1>Visualizing The Article {id}</h1>
            <p>Aqui depois vai carregar o conteúdo completo do artigo puxado do backend usando o ID {id}.</p>
        </div>
    );
}