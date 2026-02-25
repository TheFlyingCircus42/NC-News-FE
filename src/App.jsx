import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import AllArticles from './components/AllArticles'
import '../src/styles/Article-Cards.css'
import Home from './components/Home'
import ArticleByID from './components/ArticleByID'
import { Routes, Route } from "react-router-dom";
import CommentsByArticleID from './components/Comments-For-Article'

// import ArticleAndComments from './components/Article-n-Comments'

function App() {


  return (
    <>

    <Header></Header>
    <NavBar></NavBar>


    {/* <AllArticles></AllArticles> */}
    {/* <ArticlePreviewCard></ArticlePreviewCard> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/api/articles" element={<AllArticles />} />
        <Route path="/api/articles/:id" element={ <ArticleByID /> } />
        {/* <Route path="/api/articles/:id" element={< ArticleAndComments />} /> */}
        {/* <Route path="/api/test" element={ <CommentsByArticleID/>} /> */}

      </Routes>



   <h2>hello from app </h2>
    
    </>
  )
}
export default App 