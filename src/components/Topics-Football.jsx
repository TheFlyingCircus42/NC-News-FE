import ArticlesByTopic from "./Articles-By-Topic"

function TopicsFootball () {

    const topic = "football"

    return(<>
            <div className="single-topic-container">
    <h3 className="section-title"> FOOTBALL! </h3>
    <p className="topic-description"> If you like kicking balls really far, or reading about people kicking balls really far - then this is the place for you! </p>
     </div>
    



    <ArticlesByTopic topic={topic}></ArticlesByTopic>
    
    </>)
}

export default TopicsFootball