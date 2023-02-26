import IAuthor from "../../interfaces/IAuthor"

export default interface IAuthorsState {
    authors: IAuthor[]
    loadingAuthors: boolean
    messageAuthors: string | null
}