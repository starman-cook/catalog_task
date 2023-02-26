import {Model, Table, Column, BelongsToMany, DataType} from 'sequelize-typescript'
import { Book } from './Book'
import { BookAuthor } from './BookAuthor';


@Table({
    tableName: 'authors',
    timestamps: true
})
export class Author extends Model {
    @BelongsToMany(() => Book, () => BookAuthor)
    books!: Book[];

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    firstName!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    lastName!: string
}