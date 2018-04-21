import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import BookShelfList from './components/BookShelfList'
import { Route, Link } from 'react-router-dom'


class BooksApp extends React.Component {
  state = { books:[] }

  componentDidMount(){
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(response =>{
        this.getBooksOnShelf()
    })
  }

  getBooksOnShelf() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data,
      })
    })
  }

  
  render() {

    return (
      <div className="app">
       <Route path="/search" render={({ history }) => (
         <SearchBooks
            books={ this.state.books }
            changeShelf={ this.changeShelf }
          />
       )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <BookShelfList
            books={ this.state.books }
            changeShelf={ this.changeShelf }
          />
          <div className="open-search">
            <Link to="/search">Search</Link>
          </div>
        </div>
        )} /> 
      </div>
    )
  }
}

export default BooksApp
