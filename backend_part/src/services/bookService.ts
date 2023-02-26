import IBookDto from "../interfaces/IBookDto"
import { Book } from "../models/Book"
import { BookAuthor } from "../models/BookAuthor"
import {Op} from 'sequelize'
import { Author } from "../models/Author"

export class BookService {
    public getBooks = async (title: string): Promise<Book[]> => {
        return await Book.findAll({
            where: {
                title: {
                    [Op.like]: title
                }
            },
            include: [Author]
        })
    }

    public createBook = async (book: IBookDto): Promise<Book> => {
        const newBook = await Book.create({...book})
        book.authorIds.forEach(async (authorId) => {
            await BookAuthor.create({
                bookId: newBook.id,
                authorId
            })
        })
        return newBook
    }

    public addAuthor = async (bookId: number, authorId: number): Promise<BookAuthor> => {
        return await BookAuthor.create({bookId, authorId})
    }

    public deleteBook = async (id: number): Promise<number> => {
        return await Book.destroy({where: {
            id
        }})
    }
}