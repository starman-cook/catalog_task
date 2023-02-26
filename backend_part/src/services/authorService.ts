import IAuthorDto from "../interfaces/IAuthorDTO"
import { Author } from "../models/Author"


export class AuthorService {
    public getAuthors = async () => {
        return Author.findAll()
    }

    public createAuthor = async (author: IAuthorDto) => {
        return Author.create({...author})
    }
}