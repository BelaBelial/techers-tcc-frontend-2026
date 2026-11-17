import { Link } from 'react-router-dom';
import { ArticleCard } from '../components/art-card';
import "./styles/profile.css";

export function Profile() {

    //lista de artigos vai vir do backend depois
    const userArticles = [
        // { id: 1, title: "Meu Primeiro Artigo no TCC", author: "Username do Usuário" }
    ];

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-avatar">
                    <span>👤</span>
                </div>
                <div className="profile-info">
                    <h2>Username</h2>
                    <p className="profile-password">Password: ••••••••</p>
                </div>
            </div>

            <hr className="prof-divider" />

            {/* artigos do usuario vao aparecer aq */}
            <div className="user-articles-section">
                <h3>My Published Articles</h3>
                
                {/* renderiza os artigoos se tiver, mas se a lista for vazia, nao poe nada */}
                {userArticles.length > 0 ? (
                    <div className="cards-grid">
                        {userArticles.map((art) => (
                            <ArticleCard 
                                key={art.id}
                                id={art.id}
                                title={art.title}
                                author={art.author}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="empty-articles">
                        <p>You still haven't written any article.</p>
                        <Link to="/add-article" className="create-first-btn">
                            Write My First Article
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}