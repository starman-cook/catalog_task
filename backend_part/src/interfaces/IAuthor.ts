import IBook from "./IBook"

export default interface IAuthor {
    id?: number
    firstName: string
    lastName: string
    books: IBook[]
  }