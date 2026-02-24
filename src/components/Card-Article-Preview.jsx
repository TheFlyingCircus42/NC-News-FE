import '../styles/All-Articles.css'
import fetchAllArticles from '../api-fetchers/fetchAllArticles'
import { useState , useEffect } from 'react'

function ArticlePreviewCard (){

  

    return(<>
    
    <h4>Article Preview Card</h4>
    <h4>Article Title</h4>
    <img></img>
    <p>Article prievew text</p>
    <div>
        <p>author</p>
        <p>comments</p>
        <p>votes</p>
    </div>
    
    </>)
}

export default ArticlePreviewCard