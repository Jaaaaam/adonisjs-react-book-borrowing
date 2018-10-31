import React, {Component} from 'react'
import axios from 'axios'
import BookList from './components/BookList'
import ViewModal from './components/BookViewModal'
import AddEditModal from './components/AddEditBookModal'

class BookBorrowingApp extends Component {
    constructor() {
        super()

        this.state = {
            books: [],
            activeBook: {},
            isViewModalShown: false,
            isAddEditModalShown: false,
            buttonClicked: ''
        }
    }

    componentDidMount() {
        axios.get('/book-list').then((res)=> {
            console.log(res.data,'DATA!!!')
            this.setState({
                books: res.data
            })
        })
    }

    addBook(book) {
        let books = [...this.state.books]
        book.id = books.length+1
        books.push(book)
        this.setState({
            books
        }, () => {
          console.log(this.state, 'STATE')
        })
    }

    toggleView() {
        this.setState({
            isViewModalShown: !this.state.isViewModalShown
        })
    }

    toggleAddEdit(buttonClicked) {
        this.setState({
            isAddEditModalShown: !this.state.isAddEditModalShown,
            buttonClicked
        })
    }

    setActiveBook(activeBook){
        this.setState({
            activeBook
        })
    }

    render() {
        return(
            <div className="container">
            <ViewModal
            isModalShown={this.state.isViewModalShown}
            toggle={this.toggleView.bind(this)}
            activeBook = {this.state.activeBook}
            ></ViewModal>
            <AddEditModal
            isModalShown={this.state.isAddEditModalShown}
            toggle={this.toggleAddEdit.bind(this)}
            activeBook = {this.state.activeBook}
            buttonClicked = {this.state.buttonClicked}
            addBook={this.addBook.bind(this)}
            ></AddEditModal>
            <br></br>
                <h1 className="text-center">Book Borrowing System<span><button className="btn btn-dark ml-4" onClick={this.toggleAddEdit.bind(this, 'add')}> Add</button></span></h1>
                <br></br>
                <br></br>
                <BookList
                toggleView={this.toggleView.bind(this)}
                toggleAddEdit={this.toggleAddEdit.bind(this)}
                books={this.state.books}
                setActiveBook={this.setActiveBook.bind(this)}
                />
            </div>
        )
    }
}

export default BookBorrowingApp
