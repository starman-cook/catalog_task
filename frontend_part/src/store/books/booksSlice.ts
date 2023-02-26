import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../createAppAsyncThunk'
import IBooksState from './IBooksState'

const namespace = 'books'


export const booksSlice = createSlice({
    name: namespace,
    initialState: {
        books: [],
        loadingBooks: false,
        messageBooks: null
    } as IBooksState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export const { } = booksSlice.actions