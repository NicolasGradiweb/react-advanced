
import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
import db from '../../../api/db.json'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-server.midudev.now.sh/categories')
      .then(res => res.json())
      .then(response => setCategories(response))
    setLoading(false)
  }, [])

  return { categories , loading }
}

export const CategoriesList = () => {
  // const { categories , loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {db.categories.map(category => (
        <Item key={category.id}>
          <Category
            {...category}
          />
        </Item>
      ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
