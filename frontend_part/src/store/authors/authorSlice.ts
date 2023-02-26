import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../createAppAsyncThunk'
import IAuthorsState from './IAuthorsState'

const namespace = 'authors'


export const authorsSlice = createSlice({
    name: namespace,
    initialState: {
        authors: [],
        loadingAuthors: false,
        messageAuthors: null
    } as IAuthorsState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export const { } = authorsSlice.actions