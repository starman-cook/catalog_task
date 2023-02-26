
import IAuthorDto from "../interfaces/IAuthorDto"
import { Author } from "../models/Author"
import { Book } from "../models/Book"


export class AuthorService {
    public getAuthors = async (): Promise<Author[]> => {
        return await Author.findAll({include: [Book]})
    }

    public createAuthor = async (author: IAuthorDto): Promise<Author> => {
        return await Author.create({...author})
    }

    public deleteAuthor = async (id: number): Promise<number> => {
        return await Author.destroy({where: {
            id
        }})
    }
}