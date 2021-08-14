import React from 'react';
import Article from './Article';

const Articles = ({ articles }) => {
  const sorted = articles.sort((a, b) => {
    return new Date(b.updated_at) - new Date(a.updated_at)
  }) 
  
  return (
    <div className="articles" >
      {
        sorted.map((article) => {
          return (
            <Article key={article.id} article={article}/>
          )
        })
      }
    </div>
  );
};

export default Articles;