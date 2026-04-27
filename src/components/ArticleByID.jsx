import { useState , useEffect } from "react"
import fetchArticleByID from "../api-fetchers/fetchArticleByID"
import fetchCommentByArticleID from "../api-fetchers/fetchArticleCmnts"
import { useParams } from "react-router-dom";
import ArticleByIDCard from "./ArticleByIDCard";
import VoterBox from './Display-Vote-Box'
import CommentForm from './Comment-Form'
import CommentsByArticleID from "./Comments-For-Article";

function ArticleByID ()
{
    const{id} = useParams()

    const [article, setArticle] = useState(null)
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError]= useState(null)

    useEffect( () => 
        {
            Promise.all([
                fetchArticleByID(id),
                fetchCommentByArticleID(id)
            ])
            .then(([articleData, commentData])=>
                {    
                    setArticle(articleData.article[0])
                    setComments(commentData.comments)
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

        <VoterBox article={article} />
        
        <CommentForm
                article={article}
                setComments={setComments}
        />

        <CommentsByArticleID 
                comments={comments}
                setComments={setComments} 
        />

        
        </>)       
}

export default ArticleByID