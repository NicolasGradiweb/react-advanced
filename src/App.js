import React from 'react'
import { CategoriesList } from './components/CategoriesList/index.js'
import { PhotoCard } from './components/PhotoCard/index.js'
import { GlobalStyles } from './GlobalStyles.js'

const App = () => (
  <>
    <GlobalStyles />
    <CategoriesList />
    <PhotoCard />
  </>
)

export default App
