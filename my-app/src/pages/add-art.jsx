import { Link } from 'react-router-dom';
import "./styles/add-art.css";

export function AddArticle() {
    return (
        <div className="add-article-container">
            <div className="editor-card">
                <div className="editor-header">
                    <h1>Write New Article</h1>
                    <p>Share your knowledge with the metal community.</p>
                </div>

                <form className="article-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                        <label htmlFor="title">Article Title</label>
                        <input 
                            type="text" 
                            id="title"
                            name="title" 
                            className="article-input" 
                            placeholder="Ex: 5 best Death Metal albuns of the 21st century."
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
                            required
                        ></textarea>
                    </div>

                    <div className="form-actions">
                        <Link to="/" className="cancel-btn">
                            Cancel
                        </Link>
                        <button type="submit" className="publish-btn">
                            Publish Article
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}