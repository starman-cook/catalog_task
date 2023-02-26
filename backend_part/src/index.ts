import express, {Express, Request, Response} from 'express'
import dotenv from "dotenv"
dotenv.config()

export class App {
    private app: Express

    constructor() {
        this.app = express()
        this.app.get('/health-check', (req: Request, res: Response) => {
            res.send('Server is OK')
        })
    }

    public listen = (port: number): void => {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } 

    public init = () => {
        try {
            this.listen(parseInt(process.env.APP_PORT || '') || 8000)
        } catch (err: unknown) {
            console.log(err)
        }
    }
}

const app = new App()
app.init()