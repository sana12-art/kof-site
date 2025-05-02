// Blog.js
import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
    const [articles, setArticles] = useState([
        { title: "Le Guide Complet de la Gestion d'Entreprise", excerpt: "Apprenez tout ce que vous devez savoir...", img: "https://via.placeholder.com/400x300" },
        { title: "Les Meilleurs Outils de Productivité", excerpt: "Découvrez les meilleurs outils...", img: "https://via.placeholder.com/400x300" },
        { title: "Stratégies Marketing pour 2025", excerpt: "Découvrez les stratégies pour 2025...", img: "https://via.placeholder.com/400x300" },
    ]);
    
    const [showMore, setShowMore] = useState(false);

    const handleLoadMore = () => {
        setShowMore(true);
        // Ajoute plus d'articles
        setArticles([
            ...articles,
            { title: "Comment Créer une Culture d'Entreprise", excerpt: "Une culture solide...", img: "https://via.placeholder.com/400x300" },
            { title: "Les Tendances de la Blockchain", excerpt: "Tout savoir sur la blockchain...", img: "https://via.placeholder.com/400x300" },
        ]);
    };

    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1>Bienvenue sur notre Blog</h1>
                <p>Découvrez les dernières actualités, conseils et livres blancs sur notre blog dédié au développement d'entreprise.</p>
            </div>

            <div className="blog-posts">
                {articles.map((article, index) => (
                    <div className="post-card" key={index}>
                        <img src={article.img} alt={article.title} className="post-image" />
                        <div className="post-info">
                            <h3>{article.title}</h3>
                            <p className="post-excerpt">{article.excerpt}</p>
                            <a href={`/blog/post${index + 1}`} className="read-more">Lire la suite</a>
                        </div>
                    </div>
                ))}
            </div>

            {!showMore && (
                <div className="load-more">
                    <button className="load-more-btn" onClick={handleLoadMore}>Charger plus d'articles</button>
                </div>
            )}

            <div className="blog-footer">
                <p>Restez à jour avec nos dernières actualités !</p>
                <button className="subscribe-btn">S'abonner à la Newsletter</button>
            </div>
        </div>
    );
};

export default Blog;
