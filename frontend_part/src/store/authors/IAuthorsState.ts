import IAuthor from "../../interfaces/IAuthor"

export default interface IAuthorsState {
    authors: IAuthor[]
    author: IAuthor | null
    deleteAuthorResult: number | null
    loadingAuthors: boolean
    messageAuthors: string | null
}