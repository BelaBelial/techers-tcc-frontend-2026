//junta todos os componentes para formar a main home-page
import "./styles/home.css";
import { ArticleCard } from '../components/art-card';

export function Home(){
    return (
        <div className="home-page">
            <div className="feed-container">
                <ArticleCard/>
            </div>
            <h3>Upload an article!</h3>
        </div>
    );
}