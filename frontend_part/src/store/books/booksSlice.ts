import { createSlice } from '@reduxjs/toolkit'
import { booksApi } from '../../api/booksApi'
import IBook from '../../interfaces/IBook'
import IBookAuthor from '../../interfaces/IBookAuthor'
import IBookDto from '../../interfaces/IBookDto'
import { createAppAsyncThunk } from '../createAppAsyncThunk'
import IBooksState from './IBooksState'

const namespace = 'books'

export const getBooks = createAppAsyncThunk(
    `${namespace}/getBooks`,
    async (title?: string) => {
        return await booksApi.getBooks(title)
    }
)

export const getBookById = createAppAsyncThunk(
    `${namespace}/getBookById`,
    async (id: number) => {
        return await booksApi.getBookById(id)
    }
)

export const deleteBook = createAppAsyncThunk(
    `${namespace}/deleteBook`,
    async (id: number) => {
        return await booksApi.deleteBook(id)
    }
)

export const createBook = createAppAsyncThunk(
    `${namespace}/createBook`,
    async (book: IBookDto) => {
        return await booksApi.createBook(book)
    }
)

export const addAuthor = createAppAsyncThunk(
    `${namespace}/addAuthor`,
    async (bookAuthor: IBookAuthor) => {
        return await booksApi.addAuthor(bookAuthor)
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
    reducers: {
        removeBook(state, action) {
            const idx = state.books.findIndex(b => b.id === action.payload)
            state.books.splice(idx, 1)
        }
    },
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
            .addCase(getBookById.rejected, (state) => {
                state.loadingBooks = false
            })
            .addCase(getBookById.pending, (state) => {
                state.loadingBooks = true
            })
            .addCase(getBookById.fulfilled, (state, action) => {
                state.loadingBooks = false
                state.book = action.payload.result as IBook | null
                state.messageBooks = action.payload.message
            })
            .addCase(deleteBook.rejected, (state) => {
                state.loadingBooks = false
            })
            .addCase(deleteBook.pending, (state) => {
                state.loadingBooks = true
            })
            .addCase(deleteBook.fulfilled, (state, action) => {
                state.loadingBooks = false
                state.deleteBookResult = action.payload.result as number
                state.messageBooks = action.payload.message
            })
            .addCase(createBook.rejected, (state) => {
                state.loadingBooks = false
            })
            .addCase(createBook.pending, (state) => {
                state.loadingBooks = true
            })
            .addCase(createBook.fulfilled, (state, action) => {
                state.loadingBooks = false
                state.book = action.payload.result as IBook
                state.messageBooks = action.payload.message
            })
            .addCase(addAuthor.rejected, (state) => {
                state.loadingBooks = false
            })
            .addCase(addAuthor.pending, (state) => {
                state.loadingBooks = true
            })
            .addCase(addAuthor.fulfilled, (state, action) => {
                state.loadingBooks = false
                state.messageBooks = action.payload.message
            })
    }
})

export const {removeBook} = booksSlice.actions