import IBook from "../interfaces/IBook"
import IResponse from "../interfaces/IResponse"
import { AxiosResponse } from 'axios'
import { instance } from "./instance"


class BooksApi {
    public getBooks = async (title?: string): Promise<IResponse> => {
        try {
            const books: AxiosResponse<IBook[]> = await instance.get('/authors', title ? {params: {query: {title}}} : undefined)
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