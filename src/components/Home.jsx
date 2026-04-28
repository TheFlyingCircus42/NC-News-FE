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

                    console.log("FEATURE:", featured)

        }, [])

        if (!featured) return

    return(
        <p>random title</p>
    )
}

export default Home