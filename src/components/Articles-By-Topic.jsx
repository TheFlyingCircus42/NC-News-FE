import { useState , useEffect } from "react"
import fetchAllArticles from "../api-fetchers/fetchAllArticles"
import ListAllArticles from "../list-builders/list-all-articles"


function ArticlesByTopic ({topic}) 
{
    const [topicArticles, setTopicArticles]=useState([])
    // const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    // const topic = topic

    useEffect ( () => 
        {
            fetchAllArticles()
            .then((data)=> 
                {
                    const filtered = data.articles.filter(article => article.topic === topic)
                    
                    setTopicArticles(filtered)

                    // setArticles(data.articles)
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

        console.log("TOPIC ARTICLES" , topicArticles)

    return (<>
    <ListAllArticles articles={topicArticles}/>
        </>)
}

export default ArticlesByTopic