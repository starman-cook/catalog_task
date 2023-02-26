import express, {Express, Request, Response} from 'express'
import dotenv from "dotenv"
import { db } from './repository/postgres'
import cors from 'cors'
import { AuthorController } from './controllers/authorController'
import { BookController } from './controllers/bookController'
dotenv.config()

export class App {
    private app: Express

    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.app.use(cors())
        this.app.get('/health-check', (req: Request, res: Response) => {
            res.send('Server is OK')
        })
    }

    public listen = (port: number): void => {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } 

    public init = async () => {
        try {
            this.app.use('/authors', new AuthorController().getRouter())
            this.app.use('/books', new BookController().getRouter())
            this.listen(parseInt(process.env.APP_PORT || '') || 8000)
            await db.init()
        } catch (err: unknown) {
            console.log(err)
        }
    }
}

const app = new App()
app.init()