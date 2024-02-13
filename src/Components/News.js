import React, {useState,useEffect}from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props) => {
  // order of running: constuctor -> render -> componentDidMount() in CBC
  // componentDidMount only runs once 

  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)

  const updateNews = async () => {
    props.setProgress(10)
    let data=await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`)
    props.setProgress(40)
    let parsedData=await data.json()
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    document.title=`${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsMonkey`
    updateNews()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    let data=await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`)
    let parsedData=await data.json()
    setArticles(articles.concat(parsedData.articles))
    setPage(page+1)
    setTotalResults(parsedData.totalResults)
  }

    return (
      <>
        <h1 className="text-center" style={{margin:"25px 0px",marginTop:"90px"}}>NewsApp - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines of {props.countryName}</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>} 
          endMessage={!loading &&
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
        <div className="container">
          <div className="row">
              {articles.map((element,index)=>{
                  return <div className="col-md-4" key={index}>
                          <NewsItem title={element.title?element.title.slice(0,20):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
              })} 
          </div>
        </div>
        </InfiniteScroll>
      </>
    )
}

export default News
