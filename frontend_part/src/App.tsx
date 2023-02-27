import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import BooksPage from './containers/BooksPage/BooksPage'


const App = () => {
  
  return (
    <Layout>
        <Routes>
          <Route path='/' element={<BooksPage />} />
        </Routes>
    </Layout>
  )
}

export default App
