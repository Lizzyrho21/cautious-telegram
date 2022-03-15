import React from 'react'

import { useEffect } from 'react';


const Playlist = ({tracks}) => {

    
  useEffect(() => {
    // put your code here
    const getTracks = () => {
      console.log(tracks)
    }

    getTracks();
  }, [])
            
        
        
      

  return (
    <h1>Hello world!</h1>
  )
}

export default Playlist