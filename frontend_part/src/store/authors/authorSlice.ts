import { createSlice } from '@reduxjs/toolkit'
import { authorsApi } from '../../api/authorsApi'
import IAuthor from '../../interfaces/IAuthor'
import IAuthorDto from '../../interfaces/IAuthorDto'
import { createAppAsyncThunk } from '../createAppAsyncThunk'
import IAuthorsState from './IAuthorsState'

const namespace = 'authors'

export const getAuthors = createAppAsyncThunk(
    `${namespace}/getAuthors`,
    async () => {
        return await authorsApi.getAuthors()
    }
)

export const getAuthorsByMin = createAppAsyncThunk(
    `${namespace}/getAuthorsByMin`,
    async (min: number) => {
        return await authorsApi.getAuthorsByMin(min)
    }
)

export const getAuthorsByMax = createAppAsyncThunk(
    `${namespace}/getAuthorsByMax`,
    async (max: number) => {
        return await authorsApi.getAuthorsByMax(max)
    }
)

export const getAuthorsByMinMax = createAppAsyncThunk(
    `${namespace}/getAuthorsByMinMax`,
    async (minMax: {min: number, max: number}) => {
        return await authorsApi.getAuthorsByMinMax(minMax.min, minMax.max)
    }
)

export const getAuthorById = createAppAsyncThunk(
    `${namespace}/getAuthorById`,
    async (id: number) => {
        return await authorsApi.getAuthorById(id)
    }
)

export const createAuthor = createAppAsyncThunk(
    `${namespace}/createAuthor`,
    async (author: IAuthorDto) => {
        return await authorsApi.createAuthor(author)
    }
)

export const deleteAuthor = createAppAsyncThunk(
    `${namespace}/deleteAuthor`,
    async (id: number) => {
        return await authorsApi.deleteAuthor(id)
    }
)

export const deleteAuthorWithBooks = createAppAsyncThunk(
    `${namespace}/deleteAuthorWithBooks`,
    async (id: number) => {
        return await authorsApi.deleteAuthorWithBooks(id)
    }
)


export const authorsSlice = createSlice({
    name: namespace,
    initialState: {
        authors: [],
        author: null,
        deleteAuthorResult: null,
        loadingAuthors: false,
        messageAuthors: null
    } as IAuthorsState,
    reducers: {
        removeAuthor(state, action) {
            const idx = state.authors.findIndex(a => a.id === action.payload)
            state.authors.splice(idx, 1)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAuthors.rejected, (state) => {
                state.loadingAuthors = false
            })
            .addCase(getAuthors.pending, (state) => {
                state.loadingAuthors = true
            })
            .addCase(getAuthors.fulfilled, (state, action) => {
                state.loadingAuthors = false
                state.authors = action.payload.result as IAuthor[]
                state.messageAuthors = action.payload.message
            })
            .addCase(getAuthorsByMin.rejected, (state) => {
                state.loadingAuthors = false
            })
            .addCase(getAuthorsByMin.pending, (state) => {
                state.loadingAuthors = true
            })
            .addCase(getAuthorsByMin.fulfilled, (state, action) => {
                state.loadingAuthors = false
                state.authors = action.payload.result as IAuthor[]
                state.messageAuthors = action.payload.message
            })
            .addCase(getAuthorsByMax.rejected, (state) => {
                state.loadingAuthors = false
            })
            .addCase(getAuthorsByMax.pending, (state) => {
                state.loadingAuthors = true
            })
            .addCase(getAuthorsByMax.fulfilled, (state, action) => {
                state.loadingAuthors = false
                state.authors = action.payload.result as IAuthor[]
                state.messageAuthors = action.payload.message
            })
            .addCase(getAuthorsByMinMax.rejected, (state) => {
                state.loadingAuthors = false
            })
            .addCase(getAuthorsByMinMax.pending, (state) => {
                state.loadingAuthors = true
            })
            .addCase(getAuthorsByMinMax.fulfilled, (state, action) => {
                state.loadingAuthors = false
                state.authors = action.payload.result as IAuthor[]
                state.messageAuthors = action.payload.message
            })
            .addCase(getAuthorById.rejected, (state) => {
                state.loadingAuthors = false
            })
            .addCase(getAuthorById.pending, (state) => {
                state.loadingAuthors = true
            })
            .addCase(getAuthorById.fulfilled, (state, action) => {
                state.loadingAuthors = false
                state.author = action.payload.result as IAuthor | null
                state.messageAuthors = action.payload.message
            })
            .addCase(createAuthor.rejected, (state) => {
                state.loadingAuthors = false
            })
            .addCase(createAuthor.pending, (state) => {
                state.loadingAuthors = true
            })
            .addCase(createAuthor.fulfilled, (state, action) => {
                state.loadingAuthors = false
                state.author = action.payload.result as IAuthor | null
                state.messageAuthors = action.payload.message
            })
            .addCase(deleteAuthor.rejected, (state) => {
                state.loadingAuthors = false
            })
            .addCase(deleteAuthor.pending, (state) => {
                state.loadingAuthors = true
            })
            .addCase(deleteAuthor.fulfilled, (state, action) => {
                state.loadingAuthors = false
                state.deleteAuthorResult = action.payload.result as number
                state.messageAuthors = action.payload.message
            })
            .addCase(deleteAuthorWithBooks.rejected, (state) => {
                state.loadingAuthors = false
            })
            .addCase(deleteAuthorWithBooks.pending, (state) => {
                state.loadingAuthors = true
            })
            .addCase(deleteAuthorWithBooks.fulfilled, (state, action) => {
                state.loadingAuthors = false
                state.deleteAuthorResult = action.payload.result as number
                state.messageAuthors = action.payload.message
            })
    }
})

export const { removeAuthor } = authorsSlice.actions