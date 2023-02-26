import IResponse from "../interfaces/IResponse"
import { instance } from "./instance"
import { AxiosResponse } from 'axios'
import IAuthor from "../interfaces/IAuthor"
import IAuthorDto from "../interfaces/IAuthorDto"


class AuthorsApi {
    public getAuthors = async(): Promise<IResponse> => {
        try {
            const authors: AxiosResponse<IAuthor[]> = await instance.get('/authors')
            const response: IResponse = {
                message: 'Success',
                result: authors.data
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

    public getAuthorsByMin = async(min: number): Promise<IResponse> => {
        try {
            const authors: AxiosResponse<IAuthor[]> = await instance.get(`/authors/min/${min}`)
            const response: IResponse = {
                message: 'Success',
                result: authors.data
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

    public getAuthorsByMax = async(max: number): Promise<IResponse> => {
        try {
            const authors: AxiosResponse<IAuthor[]> = await instance.get(`/authors/min/${max}`)
            const response: IResponse = {
                message: 'Success',
                result: authors.data
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

    public getAuthorsByMinMax = async(min: number, max: number): Promise<IResponse> => {
        try {
            const authors: AxiosResponse<IAuthor[]> = await instance.get(`/authors/min-max/${min}/${max}`)
            const response: IResponse = {
                message: 'Success',
                result: authors.data
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

    public getAuthorById = async(id: number): Promise<IResponse> => {
        try {
            const authors: AxiosResponse<IAuthor | null> = await instance.get(`/authors/${id}`)
            const response: IResponse = {
                message: 'Success',
                result: authors.data
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

    public createAuthor = async(author: IAuthorDto): Promise<IResponse> => {
        try {
            const authors: AxiosResponse<IAuthor> = await instance.post('/authors', author)
            const response: IResponse = {
                message: 'Success',
                result: authors.data
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

    public deleteAuthor = async(id: number): Promise<IResponse> => {
        try {
            const authors: AxiosResponse<number> = await instance.delete(`/authors/${id}`)
            const response: IResponse = {
                message: 'Success',
                result: authors.data
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

    public deleteAuthorWithBooks = async(id: number): Promise<IResponse> => {
        try {
            const authors: AxiosResponse<number> = await instance.get(`/authors/with-books/${id}`)
            const response: IResponse = {
                message: 'Success',
                result: authors.data
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


export const authorsApi = new AuthorsApi()