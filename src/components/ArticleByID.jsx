import { useState , useEffect } from "react"
import fetchArticleByID from "../api-fetchers/fetchArticleByID"
import ListArticleByID from "../list-builders/List-Article-By-ID"
import { useParams } from "react-router-dom";
import CommentsByArticleID from "./Comments-For-Article";

function ArticleByID ()
{
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError]= useState(null)

    const {id} = useParams();

    useEffect( () => 
        {
            fetchArticleByID(id) 
            .then((data)=>
                {
                    setArticle(data.article)
                    setIsLoading(false)
                })
                .catch((err) => 
                    {
                        setError("Uable to load article")
                        setIsLoading(false)
                    })
        },[])

        if (isLoading) return <p>Loading...</p>
        if (error) return <p>{error}</p>

        return(<>

        <ListArticleByID article={article}/>
        <CommentsByArticleID article={article}/>
        
        </>)       
}

export default ArticleByID