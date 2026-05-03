import { useEffect, useState } from "react"
import fetchAllArticles from "../api-fetchers/fetchAllArticles"
import { Link } from "react-router-dom"

function TopicsAllTopics()
{
    const [articles, setArticles]=useState([])

    useEffect(()=>
    {
        fetchAllArticles().then((data)=>
            {
                setArticles(data.articles)
            })
    },[])

    const topics = ["coding", "football", "cooking"]

    function getRandomByTopic(topic)
        {
            const filtered = articles.filter(a => a.topic === topic)
            if (filtered.length === 0) return null
            return filtered[Math.floor(Math.random()*filtered.length)]
        }

    return(
        <div className="topics-page">
            {topics.map((topic) =>
                {
                    const article = getRandomByTopic(topic)
                    if (!article) return null

                    return(
                        <section key={topic} className="topic-section">
                            <h2 className="section-title">
                                {topic.toUpperCase()}
                            </h2>

                            <Link
                                to={`/articles/${article.article_id}`}
                                className="topic-feature-card">
                                
                                <img src={article.article_img_url}></img>
                                <div className="topic-overlay">
                                    <h3>{article.title}</h3>
                                </div>
                            </Link>
                        </section>
                    )
                })}
        </div>
    )

}

export default TopicsAllTopics