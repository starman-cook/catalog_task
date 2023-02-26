import {Model, Table, Column, BelongsToMany, DataType} from 'sequelize-typescript'
import { Author } from './Author'
import { BookAuthor } from './BookAuthor';


@Table({
    tableName: 'books',
    timestamps: true
})
export class Book extends Model {
    @BelongsToMany(() => Author, () => BookAuthor)
    authors!: Author[];

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title!: string
}