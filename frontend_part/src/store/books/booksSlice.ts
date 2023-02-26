import { createSlice } from '@reduxjs/toolkit'
import { booksApi } from '../../api/booksApi'
import IBook from '../../interfaces/IBook'
import { createAppAsyncThunk } from '../createAppAsyncThunk'
import IBooksState from './IBooksState'

const namespace = 'books'

export const getBooks = createAppAsyncThunk(
    `${namespace}/getBooks`,
    async (title?: string) => {
        return await booksApi.getBooks(title)
    }
)

export const booksSlice = createSlice({
    name: namespace,
    initialState: {
        books: [],
        book: null,
        deleteBookResult: null,
        loadingBooks: false,
        messageBooks: null
    } as IBooksState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBooks.rejected, (state) => {
                state.loadingBooks = false
            })
            .addCase(getBooks.pending, (state) => {
                state.loadingBooks = true
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.loadingBooks = false
                state.books = action.payload.result as IBook[]
                state.messageBooks = action.payload.message
            })
    }
})

export const { } = booksSlice.actions