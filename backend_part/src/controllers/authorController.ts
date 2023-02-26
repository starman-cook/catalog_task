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
    }
    public getRouter = (): Router => {
        return this.router
    }

    private getAuthors = async(req: Request, res: Response): Promise<void> => {
        try {
            const authors = await this.service.getAuthors()
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
            const author = await this.service.createAuthor(req.body)
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

}