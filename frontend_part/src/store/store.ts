import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { authorsSlice } from './authors/authorSlice'
import { booksSlice } from './books/booksSlice'


const makeStore = () => {
	return configureStore({
		reducer: {
            books: booksSlice.reducer,
            authors: authorsSlice.reducer
		},
		devTools: true
	})
}

export const store = makeStore()
export type AppDispatch = typeof store.dispatch
export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action
>

export const useAppDispatch: () => AppDispatch = useDispatch
