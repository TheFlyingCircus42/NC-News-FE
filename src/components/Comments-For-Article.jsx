import { useState , useEffect } from "react"
import fetchCommentByArticleID from "../api-fetchers/fetchArticleCmnts"
import ListCommentsByArticleID from "../list-builders/List-cmnts-byArtID"
import { useParams } from "react-router-dom";

function CommentsByArticleID () 
{
    const [comment, setComment] = useState([])
    const [isLoading, setIsLoading] =useState(true)
    const [error, setError] = useState(null)

    const {id} = useParams();

    useEffect( () => 
        {
            fetchCommentByArticleID(id)
            .then((data)=>
                {
                    console.log(data.comments, "comment for articlejsx")
                    setComment(data.comments)
                    setIsLoading(false)
                })
                .catch((err)=>
                    {
                        setError("Unable to load comment")
                        setIsLoading(false)
                    })
        },[])

        if (isLoading) return <p>Loading...</p>
        if (error) return <p>{error}</p>
        console.log(comment, "comments for article jsx")
        return <ListCommentsByArticleID comment={comment}/>

}

export default CommentsByArticleID