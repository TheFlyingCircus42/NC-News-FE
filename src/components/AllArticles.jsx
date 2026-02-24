import { useState , useEffect } from "react"
import fetchAllArticles from "../api-fetchers/fetchAllArticles"
import ListAllArticles from "../list-builders/list-all-articles"


function AllArticles(){
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect ( () => 
        {
            fetchAllArticles()
            .then((data)=> 
                {
                    setArticles(data.articles)
                    setIsLoading(false)
                })
                .catch((err)=> 
                    {
                        setError("Unable to laod articles...")
                        setIsLoading(false)
                    })
        },[])

        if (isLoading) return <p>Loading...</p>
        if (error) return <p>{error}</p>

    return <ListAllArticles articles={articles}/>
}

export default AllArticles



// import '../styles/All-Articles.css'
// import '../api-fetchers/fetchAllArticles'
// import { useState , useEffect } from 'react'
// import fetchAllArticles from '../api-fetchers/fetchAllArticles'

// function AllArticles () 
// {
//     const [articleTitle , setArticleTitle] = useState("Place Holder Title")
//     const [articleID , setArticleID] = useState("placeholder id")
//     const [articleTopic, setArticleTopic] = useState("placeholder topic")
//     const [articleAuthor, setArticleAuthor] = useState("place holder author")
//     // const [articleBody, setArticleBody] = useState("place holder body text")
//     const [articleCreatedAt, setArticleCreatedAt] = useState("place holder date")
//     const [articleVotes, setArticleVotes] = useState("place holder votes")
//     const [articleImageUrl, setArticleImageUrl] = useState("https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700")

//         useEffect (() =>  { populateArticle() } , [])

        
//         async function populateArticle() {
//         const data = await fetchAllArticles()
        
//         console.log("allarts>>>",data)
//         console.log("2. all arts >>" , data.articles[0].title)

//         setArticleTitle(data.articles[0].title)
//         setArticleID(data.articles[0]["article_id"])
//         setArticleTopic(data.articles[0].topic)
//         setArticleAuthor(data.articles[0].author)
//         // setArticleBody(data.article[0].body)
//         setArticleCreatedAt(data.articles[0]["created_at"])
//         setArticleVotes(data.articles[0].votes)
//         setArticleImageUrl(data.articles[0]["article_img_url"])

//     }


//     return(<>
        
//         <p>title = {articleTitle}</p>
//         <p>article id = {articleID}</p>
//         <p>topic = {articleTopic}</p>
//         {/* <p>body = {articleBody}</p> */}
//         <p>author = {articleAuthor}</p>
//         <p>created at = {articleCreatedAt}</p>
//         <p>votes = {articleVotes}</p>
//         <img src={articleImageUrl}></img>
        
//     </>)
// }

// export default AllArticles