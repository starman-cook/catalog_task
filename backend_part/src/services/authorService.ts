
import IAuthorDto from "../interfaces/IAuthorDto"
import { Author } from "../models/Author"
import { Book } from "../models/Book"
import { Sequelize } from 'sequelize-typescript';
import { db } from "../repository/postgres";

export class AuthorService {
    private sequelize: Sequelize
    constructor() {
        this.sequelize = db.getSequelize()
    }
    public getAuthors = async (): Promise<Author[]> => {
        return await Author.findAll({include: [Book] || []})
    }

    public getAuthorsByMin = async (min: number): Promise<Author[]> => {
        return await this.sequelize.query(`
            SELECT t2.id, t2."firstName", t2."lastName",  COUNT(t1."authorId") as amount 
                FROM book_authors as t1
            LEFT JOIN authors as t2 on t1."authorId" = t2.id
            GROUP BY t2.id, t2."firstName", t2."lastName"
            HAVING  COUNT(t1."authorId") >= ${min}
            `, {
                model: Author
        })
    }
    
    public getAuthorsByMax = async (max: number): Promise<Author[]> => {
        return await this.sequelize.query(`
            SELECT t2.id, t2."firstName", t2."lastName",  COUNT(t1."authorId") as amount 
                FROM book_authors as t1
            LEFT JOIN authors as t2 on t1."authorId" = t2.id
            GROUP BY t2.id, t2."firstName", t2."lastName"
            HAVING  COUNT(t1."authorId") <= ${max}
            `, {
                model: Author
        })
    }

    public getAuthorsByMinMax = async (min: number, max: number): Promise<Author[]> => {
        return await this.sequelize.query(`
            SELECT t2.id, t2."firstName", t2."lastName",  COUNT(t1."authorId") as amount 
                FROM book_authors as t1
            LEFT JOIN authors as t2 on t1."authorId" = t2.id
            GROUP BY t2.id, t2."firstName", t2."lastName"
            HAVING  COUNT(t1."authorId") BETWEEN ${Math.min(min, max)} AND ${Math.max(min, max)}
            `, {
                model: Author
        })
    }

    public createAuthor = async (author: IAuthorDto): Promise<Author> => {
        return await Author.create({...author})
    }

    public deleteAuthor = async (id: number): Promise<number> => {
        return await Author.destroy({where: {
            id
        }})
    }

    public getAuthor = async (id: number): Promise<Author | null> => {
        return Author.findOne({where: {
            id
        }, include: [Book] || []})
    }
}