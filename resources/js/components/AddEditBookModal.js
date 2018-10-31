import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddEditBookModal extends Component {
    constructor() {
        super()
        this.state = {
            form: {
                id: '',
                title: '',
                description: '',
                author: ''
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    addBook() {
        this.props.addBook(this.state.form)
        this.clearForm()
        this.props.toggle()
    }

    clearForm() {
        let form ={
            id: '',
            title: '',
            description: '',
            author: ''
        }

        this.setState({
            form
        })
    }

    handleInputChange(e) {
        const target = e.target
        const name = e.target.name

        let form = this.state.form
        form[name] = target.value

        this.setState({
            form
        })
    }

    getFormData() {
        console.log(this.props.buttonClicked, 'this.props.buttonClicked', this.props.buttonClicked == 'add')
        
        if (this.props.buttonClicked == 'add') return

        let newForm = {
            title: this.props.activeBook.title,
            author: this.props.activeBook.author,
            description: this.props.activeBook.description,
        }
        this.setState({
            form: newForm
        }, ()=> {
            console.log('onLoad', this.state.form)
        })
    }

    render() {
        console.log('this.propsssssss', this.props)
        return(
            <div>
                <Modal 
                isOpen={this.props.isModalShown}
                toggle={this.props.toggle}
                onOpened={this.getFormData.bind(this)}>
                    <ModalHeader>
                        { this.state.form.title }
                    </ModalHeader>
                    <ModalBody>
                        <strong>Title   </strong>
                        <input 
                        name="title"
                        value={this.state.form.title }
                        className="form-control" onChange={this.handleInputChange}></input>
                        <strong>Author</strong>
                        <input 
                        name="author"
                        value={this.state.form.author }
                        className="form-control"
                        onChange={this.handleInputChange}
                        ></input>
                        <strong>Description</strong>
                        <textarea
                        name="description"
                        value={this.state.form.description } 
                        className="form-control"
                        onChange={this.handleInputChange}
                        />
                    </ModalBody>
                    <ModalFooter>
                    <button className="btn btn-info">Save</button>
                    <button className="btn btn-warning" onClick={this.props.toggle}>Close</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default AddEditBookModal