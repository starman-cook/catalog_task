import React, { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAuthor } from "../../store/authors/authorSlice";
import { AppDispatch } from "../../store/store";


const AddAuthorPage: FunctionComponent = (): React.ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const [inputValue, setInputValue] = useState<{firstName: string, lastName: string}>({
        firstName: '',
        lastName: ''
    })
    const navigate = useNavigate()

    const submit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log(e.target)
        try {
            dispatch(createAuthor(inputValue))
            navigate({
                pathname: '/authors'
            })
        } catch (err) {
            console.log(err)
        }
        
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    return (
        <form onSubmit={submit}>
            <input name="firstName" placeholder="First name" onChange={inputHandler} type="text"/>
            <input name="lastName" placeholder="Last name" onChange={inputHandler} type="text"/>
            <button>Create</button>
        </form>
    )
}

export default AddAuthorPage