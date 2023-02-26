import IAuthor from "./IAuthor";
import IBook from "./IBook";
import IBookAuthor from "./IBookAuthor";

export default interface IResponse {
    result: IAuthor[] | IBook[] | IAuthor | IBook | IBookAuthor | number
    message: string | null
}