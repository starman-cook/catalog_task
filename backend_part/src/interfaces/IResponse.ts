import IAuthor from "./IAuthor";
import IBook from "./IBook";

export default interface IResponse {
    result: IAuthor[] | IBook[] | IAuthor | IBook
    message: string | null
}