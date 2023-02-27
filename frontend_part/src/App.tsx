import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import AddBooksPage from './containers/AddBookPage/AddBookPage'
import BooksPage from './containers/BooksPage/BooksPage'


const App = () => {
  
  return (
    <Layout>
        <Routes>
          <Route path='/' element={<BooksPage />} />
          <Route path='/add-book' element={<AddBooksPage />} />
        </Routes>
    </Layout>
  )
}

export default App
