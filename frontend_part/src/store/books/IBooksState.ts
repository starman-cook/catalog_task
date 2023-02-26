import IBook from "../../interfaces/IBook";

export default interface IBooksState {
    books: IBook[]
    book: IBook | null
    deleteBookResult: number | null
    loadingBooks: boolean
    messageBooks: string | null
}