import { start } from '@popperjs/core'
import {useState, useEffect} from 'react'
import recentPostsStyles from '/styles/homepage/recentPosts.module.css'

const ToReadNext = () => {

    const [showPosts, setshowPosts] = useState()
    const [length, setLength] = useState()
    const apiUrl = 'http://localhost:1337/api/blogposts?populate=*'
    let displayData
    let total

    const startSlice = 0
    const endSlice = startSlice + 3

    if (startSlice >= total - 1) {
      startSlice = startSlice - total
    }

    if (endSlice >= total - 1) {
      endSlice = endSlice - total 
    }
    function pullJson() {

        fetch(apiUrl)
        .then(response => response.json())

        .then(responseData => {
        displayData = responseData.data.slice(startSlice, endSlice).map(function(post) {
            return( <div key={post.Id}
            className={`${recentPostsStyles.excerptCard}
            col-4`}>

                <img src={`http://localhost:1337${post.attributes.imageLink}`}
                alt="image" width="100%"/>

                <div className={`${recentPostsStyles.smallText}`}>
                    {post.attributes.Date} | {post.attributes.categories.data[0].attributes.Name}, {post.attributes.tags.data[0].attributes.Name} </div> 
                    <br/>
                    
                <h3>{post.attributes.Title}</h3>
                <p>{post.attributes.metadescription}</p>
                </div> ) 
        })

        total = responseData.data.length

        setshowPosts(displayData)
        setLength(total)
        })
    }
    
    useEffect(() => {
        pullJson()
    },[])

  return (
    <div>
      <div className={`${recentPostsStyles.recents}`}>
      
      {showPosts}
      </div>
    </div>
  )
}

export default ToReadNext
