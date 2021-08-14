import React from 'react';
import { NavLink } from 'react-router-dom';

const Article = ({ article }) => {
  return (
    <div className="article">
      <NavLink className="article-title" to={"/" + article.slug} >{article.title}</NavLink>
      <small>{
        new Date(article.created_at).toLocaleDateString("en", {
          month: "short",
          day: "numeric",
          year:"numeric"
        })}
      </small>
      <p>{article.description}</p>
    </div>
  );
};

export default Article;