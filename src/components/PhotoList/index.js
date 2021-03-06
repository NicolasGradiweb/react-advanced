import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const PhotoList = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(item => <PhotoCard key={item} id={item} />)}
    </ul>
  )
}
