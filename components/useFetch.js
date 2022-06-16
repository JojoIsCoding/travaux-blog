import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'http://localhost:1337/api/blogposts/'
const [posts, setPosts] = useState();

function useFetch(url, postId) {

  useEffect(() => {
    axios.get(url).then((response) => {
      setPosts(response.data.posts)
    })
  }, [url])

  return { posts }
}

export default useFetch
