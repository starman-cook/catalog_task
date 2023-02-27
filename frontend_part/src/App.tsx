import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import AddAuthorPage from './containers/AddAuthorPage/AddAuthorPage'
import AddBookPage from './containers/AddBookPage/AddBookPage'
import AuthorsPage from './containers/AuthorsPage/AuthorsPage'
import BooksPage from './containers/BooksPage/BooksPage'


const App = () => {
  
  return (
    <Layout>
        <Routes>
          <Route path='/' element={<BooksPage />} />
          <Route path='/authors' element={<AuthorsPage />} />
          <Route path='/add-book' element={<AddBookPage />} />
          <Route path='/add-author' element={<AddAuthorPage />} />
        </Routes>
    </Layout>
  )
}

export default App
