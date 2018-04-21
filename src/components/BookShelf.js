import React, { Component } from 'react'
import '../App.css'
import Book from './Book'

export default class Bookshelf extends Component {
    render(){
        return (
            <ol className="books-grid">
                {this.props.books.map(book => (
                    <Book
                        book={ book }
                        books={ this.props.books }
                        key={ book.id }
                        changeShelf={ this.props.changeShelf }
                    />
                ))}
            </ol>
        )
    }
}