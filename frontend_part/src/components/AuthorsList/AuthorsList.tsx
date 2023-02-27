import React, { FunctionComponent } from "react";
import IAuthorsListProps from "./IAuthorsListProps";
import styles from './AuthorsList.module.css'
import AuthorItem from "../AuthorItem/AuthorItem";



const AuthorsList: FunctionComponent<IAuthorsListProps> = (props): React.ReactElement => {
    return (
        <div className={styles.AuthorsList}>
           {props.authors.length ? 
            props.authors.map(a => {
                return <AuthorItem 
                    key={a.id}
                    author={a}
                />
           })
        : null}
        </div>
    )
}

export default AuthorsList