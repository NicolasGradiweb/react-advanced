
import React from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

export const CategoriesList = () => (
  <List>
    {[1, 2, 3].map(category => (
      <Item key={category}><Category /></Item>
    ))}
  </List>
)
