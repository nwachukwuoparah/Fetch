import React from 'react'
import { useState,useEffect } from 'react'

const Loading = ({ theme }) => {
{/* <div style={{ fontSize: 50, color: theme && ' #f8f8f8' }}>.</div> */}
  let interval = null
  // const Gif = '.'
  const [gif, setGif] = useState([])

    setInterval(() => {
      // interval = setGif([...gif, '.'])
    }, 3000)

  useEffect(() => {
    setInterval(() => {
      // interval = setGif([...gif, '.'])
    }, 3000)
    console.log(gif)
  }, [])

  return (
    <div className='gif_contain' >
      {gif.map((item) => {
        <p>{item}</p>
      })}
    </div>
  )
}

export default Loading