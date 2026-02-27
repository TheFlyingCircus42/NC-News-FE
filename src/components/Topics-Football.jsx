import ArticlesByTopic from "./Articles-By-Topic"

function TopicsFootball () {

    const topic = "football"

    return(<>
    <h3>FOOTBALL!</h3>
    <p>If you like kicking balls really far, or reading about people kicking balls really far - then this is the place for you!</p>
    
    <ArticlesByTopic topic={topic}></ArticlesByTopic>
    
    </>)
}

export default TopicsFootball