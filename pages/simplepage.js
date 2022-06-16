import { useState, useEffect } from 'react'

const simplepage = () => {

  const [cat, setCat] = useState()

  const apiUrl = 'http://localhost:1337/api/categories'
  let displayData

  function pullJson() {

    fetch(apiUrl)
    .then(response => response.json())
    .then(responseData => {
      displayData = responseData.data.map(function(cat) {

        return (
          <div key={cat.id}> {cat.attributes.Name} <br/> 
          <img src={`http://localhost:1337${cat.attributes.categoryImageLink}`} width="400px"/></div>
        )
        
      })
      setCat(displayData)
    })

  }

  useEffect(() => {

    pullJson()

  }, [])

  return (
    <div>
      simple and clean
      {cat}
    </div>
  )
}

export default simplepage
