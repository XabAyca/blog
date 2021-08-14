import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import Description from './Description';

const ArticleDetails = () => {
  const { article } = useParams()
  const [articleDetails,setArticleDetails]=useState(null)

  useEffect(() => {
    fetch("http://localhost:1337/articles?slug=" + article)
      .then((response) => response.json())
      .then((response) => setArticleDetails(response[0]))
  }, [article]);

  return (
    <div className="article-details">
      <h2 className='article-details-title'>{articleDetails && articleDetails.title}</h2>
      <h4 className='article-details-description'>{articleDetails && articleDetails.description}</h4>
      <small>{articleDetails && articleDetails.updated_at}</small>
      <ReactMarkdown>{articleDetails && articleDetails.content}</ReactMarkdown>
      <NavLink to="/" className="title" activeClassName="title-active">My Super Blog</NavLink>
      <Description/>
    </div>
  );
};

export default ArticleDetails;