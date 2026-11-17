import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./styles/art-card.css";
import { useNavigate } from 'react-router-dom'; //hook de navegacao

export function ArticleCard ({id, title, author}) {
    const navigate = useNavigate();

    const ReadArticle = () => {
        //redireciona p pagina passando o id do artigo
        navigate(`/article/${id}`);
    };

    return (
        <Card style={{ width: '18rem' }} className='card-container'>
            <Card.Body className='card-body'>
                <Card.Title>{title}</Card.Title>
                <Button className="go-to-art" onClick={ReadArticle}>Read Article</Button>
                <span className='card-aut'>
                    By: {author || "Unknown Author"}
                </span>
            </Card.Body>
        </Card>
    );
}