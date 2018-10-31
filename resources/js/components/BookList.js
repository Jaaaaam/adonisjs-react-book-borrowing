import React, {Component} from 'react'
import ActionButtons from './ActionButtons'

class BookList extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

    }

    viewModal(book) {
        console.log(book)
        console.log(this.props,'props')
        this.props.setActiveBook(book)
        this.props.toggleView()
    }

    editModal(book) {
        console.log(book)
        console.log(this.props,'props')
        this.props.setActiveBook(book)
        this.props.toggleAddEdit('edit')
    }

    renderBookList() {
        console.log('props', this)
        return this.props.books.map((book) => (
            <li key={book.id}>
            <div className="row">
                <div className="col-md-6">
                {book.title} by  <i> {book.author} </i>
                </div>
                <div className="col-md-6">
                    <ActionButtons 
                    view={this.viewModal.bind(this, book)}
                    edit={this.editModal.bind(this, book)}>
                    </ActionButtons>
                </div>
            </div>
            
                
            </li>
        ))
    }

    render() {
        return(
            <ul>
                {this.renderBookList()}
            </ul>
        )
    }
}

export default BookList