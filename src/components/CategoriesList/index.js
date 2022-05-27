
import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
import db from '../../../api/db.json'

export const CategoriesList = () => {
  // const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  // useEffect(() => {
  //   fetch('https://petgram-server.midudev.now.sh/categories')
  //     .then(res => res.json())
  //     .then(response => setCategories(response))
  // }, [])
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
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
