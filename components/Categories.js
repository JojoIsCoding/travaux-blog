import {useState, useEffect} from 'react'

const Categories = () => {

        const [showPosts, setshowPosts] = useState()
        const apiUrl = 'http://localhost:1337/api/categories/1?populate=*'
        let displayData

        function pullJson() {
            fetch(apiUrl)
            .then(response => response.json())
            .then(responseData => {
            displayData = responseData.data.attributes.blogposts.data.map(function(post) {
                return( <div key={post.id}>
                        {post.attributes.Title}
                    </div> )
            })
            console.log(responseData)
            setshowPosts(displayData)
            })
        }
    
        useEffect(() => {
            pullJson()
        },[])
    
    

  return (
    <div>
      {showPosts}
    </div>
  )
}

export default Categories
