import React, { FunctionComponent, useEffect } from "react";
import { AppDispatch, AppState } from "../../store/store";
import { shallowEqual, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import IAuthorDetailsProps from "./IAuthorDetailsProps";
import { getAuthorById } from "../../store/authors/authorSlice";


const AuthorDetails: FunctionComponent<IAuthorDetailsProps> = (props): React.ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const {author} = useSelector((state: AppState) => state.authors, shallowEqual)

    useEffect(() => {
        props.id && dispatch(getAuthorById(props.id))
    }, [])
    return (
        <>
            {author ? <div>
                        <p>Id: {author.id}</p>
                        <h2>First name: {author.firstName}</h2>
                        <h2>Last name: {author.lastName}</h2>
                        <p>Books:</p>
                        <ul>
                            {author.books?.length ? author.books.map(b => {
                                return <li key={b.id}>{b.title}</li>
                            }) : <li>No books</li>}
                        </ul>
                    </div> 
            : 
            <div>
                No details
            </div>}
        </>
    )
}

export default AuthorDetails