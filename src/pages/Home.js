import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleDetails from '../components/ArticleDetails';
import Articles from '../components/Articles';
import DarkMode from '../components/DarkMode';
import Description from '../components/Description';
import Navbar from '../components/Navbar';

const Home = () => {
  const { article } = useParams();
  const { isDark } = useContext(DarkMode);

  const [articles,setArticles]=useState(null)

  useEffect(() => {
    fetch("http://localhost:1337/articles")
      .then(response => response.json())
      .then(response=> setArticles(response))  
  },[])

  return (
    <main className={isDark?"home dark": "home"}>
      <Navbar />
      {article? null : <Description/>}
      {article ? <ArticleDetails /> : articles && <Articles articles={articles}/>}
    </main>
  );
};

export default Home;