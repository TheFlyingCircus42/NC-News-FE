import '../styles/Home.css'
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import fetchAllArticles from '../api-fetchers/fetchAllArticles'
import ArticleCard from './ArticleCard'

function Home (){

    const [featured, setFeatured]=useState(null)
    const [trending, setTrending]=useState(null)

    useEffect(()=>
        {
            fetchAllArticles().then((data)=>
                {
                    const articles = data.articles
                    
                    const random = articles[Math.floor(Math.random() * articles.length)]
                    setFeatured(random)

                    const trendingArticles = [...articles]
                        .sort((a, b) => b.votes - a.votes)
                        .slice(0,4)
                    setTrending(trendingArticles)
                })
        }, [])

    if (!featured) return <p>Loading...</p>

    return(
       <div className='home-container'>

            <div className='home-featured-container'>
            <Link to={`/articles/${featured.article_id}`}
                className='home-featured'>
                    <img 
                        src={featured.article_img_url}
                        alt={featured.title}
                        className='home-featured-img'>
                    </img>    
                    <div className='home-featured-badge'>
                        Featured Article
                    </div>
                    <div className='home-featured-overlay'>
                        <p className='home-featured-topic'>{featured.topic}</p>
                        <h2 className='home-featured-title'>{featured.title}</h2>
                </div>
            </Link>
            </div>

    
            <div className='home-section'>
                <h2 className='section-title'>
                    Trending Articles
                </h2>
                
                <div className='home-trending-row'>
                    {trending.map((article, i)=>(
                        <div className={`trending-card ${i === 0 || i === trending.length -1 ? "featured" : ""}`}>
                            <ArticleCard article={article}/>
                        </div>
                    ))}
            </div>
            </div>

       </div>
    )
}

export default Home