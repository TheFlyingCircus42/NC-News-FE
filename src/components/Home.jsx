import '../styles/Home.css'
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import fetchAllArticles from '../api-fetchers/fetchAllArticles'

function Home (){

    const [featured, setFeatured]=useState(null)

    useEffect(()=>
        {
            fetchAllArticles().then((data)=>
                {
                    const articles = data.articles
                    const random = articles[Math.floor(Math.random() * articles.length)]
                    setFeatured(random)
                })
        }, [])

    if (!featured) return

    return(
       <div className='home-container'>

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
    )
}

export default Home