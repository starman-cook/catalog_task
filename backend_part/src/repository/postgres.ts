import { Sequelize } from 'sequelize-typescript';
import dotenv from "dotenv"
import path from 'path';
dotenv.config()


export class DB {
    private sequelize: Sequelize

    constructor() {
        this.sequelize = new Sequelize({
            database: process.env.POSTGRES_DB,
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            storage: ':memory:',
            models: [path.join(__dirname, '../models')], 
          });
    }

    public init = async() => {
            try {
                await this.sequelize.authenticate()
                await this.sequelize.sync({
                    alter: true
                })
                console.log('DB is connected')
            } catch (err) {
                console.log(err)
            }
    }
}