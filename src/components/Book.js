import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
import '../App.css'

export default class Book extends Component {
    render(){

        const coverImg = this.props.book.imageLinks.thumbnail 
        const title = this.props.book.title ? this.props.book.title : "No title available"

        return (
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" 
                style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}></div>
                 <BookShelfChanger
                    book={ this.props.book }
                    books={ this.props.books }
                    changeShelf={ this.props.changeShelf }
                 />
              </div>
              <div className="book-title">{ title }</div>
              {
                  this.props.book.authors && this.props.book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>{author}</div>
                  ))
              }
            </div>
          </li>
        )
    }
}