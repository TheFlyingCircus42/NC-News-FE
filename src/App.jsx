import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import AllArticles from './components/AllArticles'
import ArticlePreviewCard from './components/Card-Article-Preview'



function App() {


  return (
    <>
    <Header></Header>
    <NavBar></NavBar>
    <AllArticles></AllArticles>
    {/* <ArticlePreviewCard></ArticlePreviewCard> */}



   <h2>hello from app </h2>
    
    </>
  )
}
export default App 