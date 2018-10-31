import React, {Component} from 'react'
import BookList from './components/BookList'
import ViewModal from './components/BookViewModal'
import AddEditModal from './components/AddEditBookModal'

class BookBorrowingApp extends Component {
    constructor() {
        super()

        this.state = {
            books: [
                {
                    id: 1,
                    title: 'A Walk to Remember',
                    author: 'Mitch Albom',
                    description: 'Vestibulum consectetur eros ut rutrum dignissim. Maecenas tincidunt lobortis libero tristique faucibus. Integer sagittis enim tincidunt sollicitudin mattis. Vivamus id dictum mi. Curabitur a metus purus. Mauris et sapien sem. Duis fermentum justo quis metus congue facilisis.',
                    date_borrowed: '',
                    date_returned: '',
                    borrowed_by: ''
                },
                {
                    id:2,
                    title: 'Falling Into Place',
                    description: 'Curae; Praesent nunc tortor, malesuada sed aliquet in, iaculis id nisi. Maecenas viverra erat ac condimentum tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
                    author: 'Amy Zhang',
                    date_borrowed: '',
                    date_returned: '',
                    borrowed_by: ''
                }
            ],
            activeBook: {},
            isViewModalShown: false,
            isAddEditModalShown: false,
            buttonClicked: ''
        }
    }

    addBook(book) {
        let books = {...this.state.books}
        books.push(book)
        this.setState({
            books
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