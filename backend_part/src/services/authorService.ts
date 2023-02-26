
import IAuthorDto from "../interfaces/IAuthorDto"
import { Author } from "../models/Author"


export class AuthorService {
    public getAuthors = async (): Promise<Author[]> => {
        return await Author.findAll()
    }

    public createAuthor = async (author: IAuthorDto): Promise<Author> => {
        return await Author.create({...author})
    }
}