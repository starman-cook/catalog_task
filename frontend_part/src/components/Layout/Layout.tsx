import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import ILayoutProps from "./ILayoutProps";
import styles from './Layout.module.css'


const Layout: FunctionComponent<ILayoutProps> = (props): React.ReactElement => {
    return (
        <div className={styles.Layout}>
            <header className={styles.Layout__header}>
                <div className={styles.Layout__header__inner}>
                    <nav className={styles.Layout__header__nav}>
                        <NavLink className={styles.Layout__header__link} to={'/'}>Books</NavLink>
                        <NavLink className={styles.Layout__header__link} to={'/authors'}>Authors</NavLink>
                        <NavLink className={styles.Layout__header__link} to={'/add-book'}>Add Book</NavLink>
                        <NavLink className={styles.Layout__header__link} to={'/add-author'}>Add Author</NavLink>

                    </nav>
                </div>
            </header>
            <main className={styles.Layout__main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout