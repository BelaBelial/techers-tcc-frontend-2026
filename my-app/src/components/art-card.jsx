import Card from 'react-bootstrap/Card';
import "./styles/art-card.css"

export function ArticleCard () {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button className="go-to-art">Read Article</Button>
            </Card.Body>
        </Card>
    );
}