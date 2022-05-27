
import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
// import db from '../../../api/db.json'

export const CategoriesList = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://petgram-server.midudev.now.sh/categories')
      .then(res => res.json())
      .then(response => setCategories(response))
  }, [])

  const renderList = () => (
    <List>
      {categories.map(category => (
        <Item key={category.id}>
          <Category
            {...category}
          />
        </Item>
      ))}
    </List>
  )

  return (
    renderList()
  )
}
