import express, { Router, Request, Response } from "express";
import IAuthor from "../interfaces/IAuthor";
import IResponse from "../interfaces/IResponse";
import { AuthorService } from "../services/authorService";



export class AuthorController {
    private router: Router
    private service: AuthorService
    constructor() {
        this.router = express.Router()
        this.service = new AuthorService()
        this.router.get('/', this.getAuthors)
        this.router.post('/', this.createAuthor)
        this.router.delete('/:id', this.deleteAuthor)
        this.router.delete('/with-books/:id', this.deleteAuthorWithBooks)
        this.router.get('/:id', this.getAuthor)
        this.router.get('/min/:min', this.getAuthorsByMin)
        this.router.get('/max/:max', this.getAuthorsByMax)
        this.router.get('/min-max/:min/:max', this.getAuthorsByMinMax)
    }
    public getRouter = (): Router => {
        return this.router
    }

    private getAuthorsByMinMax = async(req: Request, res: Response): Promise<void> => {
        try {
            const authors: IAuthor[] = await this.service.getAuthorsByMinMax(parseInt(req.params.min), parseInt(req.params.max))
            const response: IResponse = {
                result: authors,
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

    private getAuthorsByMax = async(req: Request, res: Response): Promise<void> => {
        try {
            const authors: IAuthor[] = await this.service.getAuthorsByMax(parseInt(req.params.max))
            const response: IResponse = {
                result: authors,
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

    private getAuthorsByMin = async(req: Request, res: Response): Promise<void> => {
        try {
            const authors: IAuthor[] = await this.service.getAuthorsByMin(parseInt(req.params.min))
            const response: IResponse = {
                result: authors,
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

    private getAuthors = async(req: Request, res: Response): Promise<void> => {
        try {
            const authors: IAuthor[] = await this.service.getAuthors()
            const response: IResponse = {
                result: authors,
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

    private createAuthor = async(req: Request, res: Response): Promise<void> => {
        try {
            const author: IAuthor = await this.service.createAuthor(req.body)
            const response: IResponse = {
                result: author,
                message: 'Author is created'
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

    private deleteAuthor = async(req: Request, res: Response): Promise<void> => {
        try {
            const num: number = await this.service.deleteAuthor(parseInt(req.params.id))
            const response: IResponse = {
                result: num,
                message: num ? 'Author is deleted' : 'Nothing was deleted'
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

    private deleteAuthorWithBooks = async(req: Request, res: Response): Promise<void> => {
        try {
            const num: number = await this.service.deleteAuthorWithBooks(parseInt(req.params.id))
            const response: IResponse = {
                result: num,
                message: num ? 'Author is deleted with books' : 'Nothing was deleted'
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

    private getAuthor = async(req: Request, res: Response): Promise<void> => {
        try {
            const author: IAuthor | null = await this.service.getAuthor(parseInt(req.params.id))
            const response: IResponse = {
                result: author,
                message: author ? 'Author found' : 'Nothing found'
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