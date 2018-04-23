import React from 'react'
import '../App.css'
import Book from './Book'

export default function Bookshelf(props) {
        return (
            <ol className="books-grid">
                {props.books.map(book => (
                    <Book
                        book={ book }
                        books={ props.books }
                        key={ book.id }
                        changeShelf={ props.changeShelf }
                    />
                ))}
            </ol>
        )
    }