import IBook from "../../interfaces/IBook";

export default interface IBooksState {
    books: IBook[]
    loadingBooks: boolean
    messageBooks: string | null
}