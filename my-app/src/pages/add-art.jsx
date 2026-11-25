import { Link, useNavigate } from 'react-router-dom';
import "./styles/add-art.css";
import { useState } from 'react';

export function AddArticle() {
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    //fazer o redirect do personagem dps de publicar o artigo
    const navigate = useNavigate();

    //executa quando clica em Publish Article
    const handlePub = async (e) => {
        e.preventDefault();

        const usuarioSalvo = localStorage.getItem('usuarioLogado');
        if (!usuarioSalvo) {
            alert('You must be logged in to publish an article!');
            navigate('/login');
            return;
        }

        const usuario = JSON.parse(usuarioSalvo);
        setIsLoading(true);

        try {
            //Ajuste a porta e rota exata de criação de artigos do seu backend
            const response = await fetch('https://techers-tcc-2026-bbelial-1.onrender.com/articles/add-article', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: usuario.id,
                    autor: usuario.username,
                    titulo,
                    conteudo,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Article published successfully!');
                setTitulo('');
                setConteudo('');
                navigate('/');
            }
            else {
                alert(data.erro || 'Error publishing article.');
            }
        }
        catch (error) {
            console.error('Erro na requisição:', error);
            alert('Could not connect to the server.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="add-article-container">
            <div className="editor-card">
                <div className="editor-header">
                    <h1>Write New Article</h1>
                    <p>Share your knowledge with the metal community.</p>
                </div>

                <form className="article-form" onSubmit={handlePub}>
                    <div className="input-group">
                        <label htmlFor="title">Article Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="article-input"
                            placeholder="Ex: 5 best Death Metal albuns of the 21st century."
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="content">Content</label>
                        <textarea
                            id="content"
                            name="content"
                            className="article-textarea"
                            placeholder="Write all the content of your article here."
                            rows="12"
                            value={conteudo}
                            onChange={(e) => setConteudo(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div className="form-actions">
                        <Link to="/" className="cancel-btn">
                            Cancel
                        </Link>
                        <button type="submit" className="publish-btn" disabled={isLoading}>
                            Publish Article
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}