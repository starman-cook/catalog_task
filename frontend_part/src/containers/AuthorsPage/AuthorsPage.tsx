import React, { FunctionComponent, useEffect, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AuthorsList from "../../components/AuthorsList/AuthorsList";
import Button from "../../components/UI/Button/Button";
import { getAuthors, getAuthorsByMax, getAuthorsByMin, getAuthorsByMinMax } from "../../store/authors/authorSlice";
import { AppDispatch, AppState } from "../../store/store";


const AuthorsPage: FunctionComponent = (): React.ReactElement => {
    const inputMinRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const inputMaxRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const inputMinMaxRefMin: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const inputMinMaxRefMax: React.MutableRefObject<HTMLInputElement | null> = useRef(null)


    const dispatch: AppDispatch = useDispatch()
    const {authors} = useSelector((state: AppState) => state.authors, shallowEqual)

    useEffect(() => {
        dispatch(getAuthors())
    }, [])
    const findByMinAuthors = (): void => {
        inputMinRef.current && dispatch(getAuthorsByMin(parseInt(inputMinRef.current?.value)))
    }
    const findByMaxAuthors = (): void => {
        inputMaxRef.current && dispatch(getAuthorsByMax(parseInt(inputMaxRef.current?.value)))
    }
    const findByMinMaxAuthors = (): void => {
        if (inputMinMaxRefMin.current && inputMinMaxRefMax.current) {
            dispatch(getAuthorsByMinMax({min: parseInt(inputMinMaxRefMin.current?.value), max: parseInt(inputMinMaxRefMax.current?.value)}))
        }
    }
    return (
        <>
            <div>
                <div>
                    <h3>By Min</h3>
                    <input defaultValue={1} ref={inputMinRef} type="number" placeholder="MIN BOOKS" />
                    <Button
                        title={'FIND'}
                        click={findByMinAuthors}
                    ></Button>
                </div>
                <div>
                    <h3>By Max</h3>
                    <input defaultValue={1} ref={inputMaxRef} type="number" placeholder="MAX BOOKS" />
                    <Button
                        title={'FIND'}
                        click={findByMaxAuthors}
                    ></Button>
                </div>
                <div>
                    <h3>Between Min and Max</h3>
                    <input defaultValue={1} ref={inputMinMaxRefMin} type="number" placeholder="Min" />
                    <input defaultValue={1} ref={inputMinMaxRefMax} type="number" placeholder="Max" />

                    <Button
                        title={'FIND'}
                        click={findByMinMaxAuthors}
                    ></Button>
                </div>
            </div>
            <AuthorsList 
                authors={authors}
            />
        </>
    )
}

export default AuthorsPage