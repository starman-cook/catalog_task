import express, { Router, Request, Response } from "express";
import IBook from "../interfaces/IBook";
import IBookAuthor from "../interfaces/IBookAuthor";
import IResponse from "../interfaces/IResponse";
import { BookService } from "../services/bookService";



export class BookController {
    private router: Router
    private service: BookService
    constructor() {
        this.router = express.Router()
        this.service = new BookService()
        this.router.get('/', this.getBooks)
        this.router.post('/', this.createBook)
        this.router.post('/add-author', this.addAuthor)
        this.router.delete('/:id', this.deleteBook)
        this.router.get('/:id', this.getBook)
    }
    public getRouter = (): Router => {
        return this.router
    }

    private getBooks = async(req: Request, res: Response): Promise<void> => {
        try {
            const books: IBook[] = await this.service.getBooks(req.query.title?.toString())
            const response: IResponse = {
                result: books,
                message: 'Results found'
            }
            res.send(response)
        } catch(err: unknown) {
            const error = err as Error
            const response: IResponse = {
                result: [],
                message: error.message
            }
            res.send(response)
        }
    }

    private createBook = async(req: Request, res: Response): Promise<void> => {
        try {
            const book: IBook = await this.service.createBook(req.body)
            const response: IResponse = {
                result: book,
                message: 'Book is created'
            }
            res.send(response)
        } catch(err: unknown) {
            const error = err as Error
            const response: IResponse = {
                result: [],
                message: error.message
            }
            res.send(response)
        }
    }

    private addAuthor = async(req: Request, res: Response): Promise<void> => {
        try {
            const {bookId, authorId} = req.body
            const bookAuthor: IBookAuthor = await this.service.addAuthor(bookId, authorId)
            const response: IResponse = {
                result: bookAuthor,
                message: 'Author is added'
            }
            res.send(response)
        } catch(err: unknown) {
            const error = err as Error
            const response: IResponse = {
                result: [],
                message: error.message
            }
            res.send(response)
        }
    }

    private deleteBook = async(req: Request, res: Response): Promise<void> => {
        try {
            const num: number = await this.service.deleteBook(parseInt(req.params.id))
            const response: IResponse = {
                result: num,
                message: num ? 'Book is deleted' : 'Nothing was deleted'
            }
            res.send(response)
        } catch(err: unknown) {
            const error = err as Error
            const response: IResponse = {
                result: [],
                message: error.message
            }
            res.send(response)
        }
    }


    private getBook = async(req: Request, res: Response): Promise<void> => {
        try {
            const book: IBook | null = await this.service.getBook(parseInt(req.params.id))
            const response: IResponse = {
                result: book,
                message: book ? 'Book found' : 'Nothing found'
            }
            res.send(response)
        } catch(err: unknown) {
            const error = err as Error
            const response: IResponse = {
                result: [],
                message: error.message
            }
            res.send(response)
        }
    }

}