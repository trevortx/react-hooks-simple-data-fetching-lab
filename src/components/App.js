import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [image, setImage] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(r => r.json())
      .then(data => {
        setImage(data.message)
        setIsLoaded(true)
      })
  }, [])

  return (
    <div>
      {isLoaded ? <img src={image} alt="A Random Dog"></img> : <p>Loading...</p>}
    </div>
  )
}

export default App