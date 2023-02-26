import {Model, Table, Column, ForeignKey} from 'sequelize-typescript'
import { Author } from './Author'
import { Book } from './Book';


@Table({
    tableName: 'book_authors',
    createdAt: false,
    updatedAt: false
})
export class BookAuthor extends Model {
  @ForeignKey(() => Book)
  @Column
  bookId!: number;

  @ForeignKey(() => Author)
  @Column
  authorId!: number;
}