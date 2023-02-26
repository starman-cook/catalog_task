import IBook from "../interfaces/IBook"
import IResponse from "../interfaces/IResponse"
import { AxiosResponse } from 'axios'
import { instance } from "./instance"
import IBookDto from "../interfaces/IBookDto"
import IBookAuthor from "../interfaces/IBookAuthor"


class BooksApi {
    public getBooks = async (title?: string): Promise<IResponse> => {
        try {
            const books: AxiosResponse<IBook[]> = await instance.get('/books', title ? {params: {query: {title}}} : undefined)
            const response: IResponse = {
                message: 'Success',
                result: books.data
            }
            return response
        } catch (err: unknown) {
            const error = err as Error
            const response: IResponse = {
                message: error.message,
                result: null
            }
            return response
        }
    }

    public getBookById = async (id: number): Promise<IResponse> => {
        try {
            const books: AxiosResponse<IBook> = await instance.get(`/books/${id}`)
            const response: IResponse = {
                message: 'Success',
                result: books.data
            }
            return response
        } catch (err: unknown) {
            const error = err as Error
            const response: IResponse = {
                message: error.message,
                result: null
            }
            return response
        }
    }

    public deleteBook = async (id: number): Promise<IResponse> => {
        try {
            const books: AxiosResponse<number> = await instance.delete(`/books/${id}`)
            const response: IResponse = {
                message: 'Success',
                result: books.data
            }
            return response
        } catch (err: unknown) {
            const error = err as Error
            const response: IResponse = {
                message: error.message,
                result: null
            }
            return response
        }
    }

    public createBook = async (book: IBookDto): Promise<IResponse> => {
        try {
            const books: AxiosResponse<IBook> = await instance.post('/books', book)
            const response: IResponse = {
                message: 'Success',
                result: books.data
            }
            return response
        } catch (err: unknown) {
            const error = err as Error
            const response: IResponse = {
                message: error.message,
                result: null
            }
            return response
        }
    }

    public addAuthor = async (bookAuthor: IBookAuthor): Promise<IResponse> => {
        try {
            const books: AxiosResponse<IBookAuthor> = await instance.post('/books/add-author', bookAuthor)
            const response: IResponse = {
                message: 'Success',
                result: books.data
            }
            return response
        } catch (err: unknown) {
            const error = err as Error
            const response: IResponse = {
                message: error.message,
                result: null
            }
            return response
        }
    }

}

export const booksApi = new BooksApi()