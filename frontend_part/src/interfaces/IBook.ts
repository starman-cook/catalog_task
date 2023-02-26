import IAuthor from "./IAuthor"

export default interface IBook {
    id?: number
    title: string
    authors: IAuthor[]
  }