import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import '../App.css'
import noCoverImage from '../icons/no-cover-image.png'

export default function Book(props) {
        const coverImg = props.book.imageLinks ? props.book.thumbnail : noCoverImage
        const title = props.book.title ? props.book.title : "No title available"

        return (
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" 
                style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}></div>
                 <BookShelfChanger
                    book={ props.book }
                    books={ props.books }
                    changeShelf={ props.changeShelf }
                 />
              </div>
              <div className="book-title">{ title }</div>
              {
                  props.book.authors && props.book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>{author}</div>
                  ))
              }
            </div>
          </li>
        )
      }