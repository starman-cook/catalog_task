import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAuthors } from './store/authors/authorSlice'
import { getBooks } from './store/books/booksSlice'
import { AppDispatch, AppState } from './store/store'

const App = () => {
  const dispatch: AppDispatch = useDispatch()
  const {authors} = useSelector((state: AppState) => state.authors)
  const {books} = useSelector((state: AppState) => state.books)


  useEffect(() => {
    dispatch(getBooks())
  }, [])
  return (
    <>
      <h1>{JSON.stringify(books)}</h1>
    </>
  )
}

export default App
