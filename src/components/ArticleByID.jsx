import { useState , useEffect } from "react"
import fetchArticleByID from "../api-fetchers/fetchArticleByID"
import ListArticleByID from "../list-builders/List-Article-By-ID"
import { useParams } from "react-router-dom";
import ArticleByIDCard from "./ArticleByIDCard";
import VoterBox from './Display-Vote-Box'
import CommentForm from './Comment-Form'
import CommentsByArticleID from "./Comments-For-Article";

function ArticleByID ()
{
    const [article, setArticle] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError]= useState(null)

    const {id} = useParams();

    useEffect( () => 
        {
            fetchArticleByID(id) 
            .then((data)=>
                
                {    
                    setArticle(data.article[0])
                    setIsLoading(false)

                })
                .catch((err) => 
                    {
                        setError("Uable to load article")
                        setIsLoading(false)
                    })
        },[id])

        if (isLoading) return <p>Loading...</p>
        if (error) return <p>{error}</p>

        return(<>
        <ArticleByIDCard article={article}/>
        

        
        </>)       
}

export default ArticleByID