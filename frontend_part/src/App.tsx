import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAuthors } from './store/authors/authorSlice'
import { AppDispatch, AppState } from './store/store'

const App = () => {
  const dispatch: AppDispatch = useDispatch()
  const {authors} = useSelector((state: AppState) => state.authors)

  useEffect(() => {
    dispatch(getAuthors())
  }, [])
  return (
    <>
      <h1>{JSON.stringify(authors)}</h1>
    </>
  )
}

export default App
