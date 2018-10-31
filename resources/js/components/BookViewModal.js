import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const BookViewModal = (props) =>  {
        return(
            <div>
                <Modal isOpen={props.isModalShown} toggle={props.toggle}>
                    <ModalHeader>
                        { props.activeBook.title }
                    </ModalHeader>
                    <ModalBody>
                        <strong>Author</strong>
                        <p>{ props.activeBook.author }</p>
                        <strong>Description</strong>
                        <p>{ props.activeBook.description }</p>
                    </ModalBody>
                    <ModalFooter>
                    <button className="btn btn-warning" onClick={props.toggle}>Close</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

export default BookViewModal