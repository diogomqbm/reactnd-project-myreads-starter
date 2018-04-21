import React, { Component } from 'react'
import '../App.css'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'


export default class SearchBooks extends Component {
    state = {
        query:'',
        newBooks: [],
        searchErr: false,
    }

    getBooks = event => {
        const query = event.target.value.trim()
        this.setState({ query })

        if(query) {
            BooksAPI.search(query)
            .then(books => {
                books.length > 0 ? this.setState({ 
                    newBooks: books,
                    searchErr: false,
                })
                : this.setState({
                    newBooks: [],
                    searchErr: true,
                })
            })
        } else this.setState({
            newBooks: [],
            searchErr: false,
        })
    }

    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={ this.getBooks }    
                />
              </div>
            </div>
            <div className="search-books-results">
              {this.state.newBooks.length > 0 && (
                <div>
                    <div className=''>
                        <h3>Search returned { this.state.newBooks.length } books </h3>
                    </div>
                    <ol className="books-grid">
                    {this.state.newBooks.map(book => (
                        <Book
                            book={ book }
                            books={ this.props.books }
                            key={ book.id }
                            changeShelf={ this.props.changeShelf }
                        />
                    ))}
                    </ol>
                </div>
              )}
              { this.state.searchErr && (
                    <div>
                        <div className=''>
                            <h3>Search return 0 books. Please try again!</h3>
                        </div>
                    </div>
              )}
            </div>
          </div>
        )
    }
}