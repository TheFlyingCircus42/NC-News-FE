import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import AllArticles from './components/AllArticles'
import './styles/Article-Cards.css'
import Home from './components/Home'
import ArticleByID from './components/ArticleByID'
import { Routes, Route } from "react-router-dom";
import CommentsByArticleID from './components/Comments-For-Article'
import TopicsAllTopics from './components/Topics-All-Topics'
import TopicsCoding from './components/Topics-Coding'
import TopicsFootball from './components/Topics-Football'
import TopicsCooking from './components/Topics-Cooking'
import Footer from './components/Footer'

function App() {

  return (
    <div className='app-container'>


    <Header></Header>

    <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/api/articles" element={<AllArticles/>} />
        <Route path="/api/articles/:id" element={ <ArticleByID/> } />        
        <Route path="topics/alltopics" element= { <TopicsAllTopics/> } />
        <Route path="topics/coding" element= { <TopicsCoding/> } />
        <Route path="topics/football" element={ <TopicsFootball/> } />
        <Route path="topics/cooking" element={ <TopicsCooking/>} />
      </Routes>
      
    <Footer></Footer>
   
    </div>
  )
}
export default App 