import React from 'react'

const DEFAULT_IMAGE = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mS6x_Ro4JPjX5tNDpZGDA0_kAcfYLgm7Sg&usqp=CAU'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <a href={path}>
    <img src={cover} />
    {emoji}
  </a>
)
