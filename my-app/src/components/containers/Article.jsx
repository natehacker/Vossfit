import React from 'react';
import './Article.css';

const Article = ({ text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;