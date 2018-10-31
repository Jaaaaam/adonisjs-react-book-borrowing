'use strict'
const Database = use('Database')
const Book = use('App/Models/Book')

class BookController {
    async getAll({request, response}) {
        const books = await Book.all()

        return books
    }
}

module.exports = BookController
