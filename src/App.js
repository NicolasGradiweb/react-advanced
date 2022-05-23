import React from 'react'
import { CategoriesList } from './components/CategoriesList/index.js'
import { PhotoList } from './components/PhotoList/index.js'
import { GlobalStyles } from './GlobalStyles.js'
import { Logo } from './components/Logo'

const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <CategoriesList />
    <PhotoList />
  </>
)

export default App
