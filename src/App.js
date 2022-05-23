import React from 'react'
import { CategoriesList } from './components/CategoriesList/index.js'
import { PhotoList } from './components/PhotoList/index.js'
import { GlobalStyles } from './GlobalStyles.js'

const App = () => (
  <>
    <GlobalStyles />
    <CategoriesList />
    <PhotoList />
  </>
)

export default App
