import { Link } from 'react-router-dom';
import { ArticleCard } from '../components/art-card';
import { useState, useEffect } from 'react';
import "./styles/profile.css";
import { useNavigate } from 'react-router-dom';

export function Profile() {
    const [user, setUser] = useState(null);
    const [userArticles, setUserArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('usuarioLogado');

        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            const username = parsedUser.username;
            const userId = parsedUser.id; // pega o id para colocar no perfil la

            // byscando dados doo perfil
            fetch(`https://techers-tcc-2026-bbelial-1.onrender.com/profile/${username}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setUser(data.user);
                    }
                })
                .catch((err) => console.error("Erro ao carregar perfil:", err));

            // busccar os artigos daquele user
            fetch(`https://techers-tcc-2026-bbelial-1.onrender.com/articles/user/${userId}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setUserArticles(data.articles); // Atualiza com os artigos reais do banco!
                    }
                })
                .catch((err) => console.error("Erro ao carregar artigos:", err))
                .finally(() => setIsLoading(false));
        }
        else {
            setIsLoading(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('usuarioLogado');
        navigate('/login');
    };

    if (isLoading) {
        return <div className="profile-container"><p>Loading profile...</p></div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-avatar">
                    <span>👤</span>
                </div>
                <div className="profile-info">
                    {/* Exibe o username real que veio do banco */}
                    <h2>{user ? user.username : "Usuário"}</h2>
                    <p className="profile-password">ID: {user ? user.id : "---"}</p>
                </div>
            </div>

            <hr className="prof-divider" />

            <div className="user-articles-section">
                <h3>My Published Articles</h3>
                
                {userArticles.length > 0 ? (
                    <div className="cards-grid">
                        {userArticles.map((art) => (
                            <ArticleCard 
                                key={art.id}
                                id={art.id}
                                title={art.titulo}
                                author={art.autor}
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

            <button onClick={handleLogout} className="logout-btn">
                Logout
            </button>
        </div>
    );
}