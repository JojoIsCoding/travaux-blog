import {useState, useEffect} from 'react'
import recentPostsStyles from '/styles/homepage/recentPosts.module.css'
import Link from 'next/link'

const RecentPosts = () => {

    const [showPosts, setshowPosts] = useState()
    const apiUrl = 'https://still-dusk-49483.herokuapp.com/api/blogposts?populate=*'
    let displayData

    function pullJson() {

        fetch(apiUrl)
        .then(response => response.json())
        .then(responseData => {
        displayData = responseData.data.slice(0, 3).map(function(post) {

            return( <div key={post.Id}
            className={`${recentPostsStyles.excerptCard}
            offset-xs-1 offset-sm-1 offset-md-0 col-sm-10 col-md-6 col-lg-4 col-10`}  data-aos="fade-up" data-aos-duration="1000">

                <img src={`${post.attributes.imageLink}`}
                alt="image" width="100%"/>

                <div key={post.id} className={`${recentPostsStyles.smallText}`}>
                    {post.attributes.Date} | {post.attributes.category.data.attributes.Name}, {post.attributes.tags.data.slice(0).map((tag) => {return(<span>{tag.attributes.name}</span>)})} </div> 
                    
                <h3 className={`${recentPostsStyles.link}`}><Link href={'/p/' + post.id + '/' + post.attributes.slug}><a>{post.attributes.Title}</a></Link></h3>
                <p>{post.attributes.metadescription}</p>
                </div> ) 
        })
        setshowPosts(displayData)
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

export default RecentPosts
