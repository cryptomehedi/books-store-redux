import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid'
const initialBooks = {
    books: [
        {id:uuidv4() , title: "what is love", author: "ananto" , available: 'yes', price: 80 , generic:['a'] , country: "native"},
        {id:uuidv4() , title: "what is heart", author: "ananto" , available: 'yes', price: 80 , generic:['a'] , country: "native"},
        {id:uuidv4() , title: "what is para", author: "ananto" , available: 'yes', price: 80 , generic:['a'] , country: "native"},
    ]
}

export const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            const id = action.payload
            state.books = state.books.filter(book => book.id !== id)
        },
        updateBook: (state, action) => {
            const {id, title, author, price, available, generic, country} = action.payload
            const existingBook = state.books.filter(book => book.id === id)
            if (existingBook){
                existingBook[0].title = title
                existingBook[0].author = author
                existingBook[0].price = price
                existingBook[0].available = available
                existingBook[0].generic = generic
                existingBook[0].country = country
            }
        },

    }
})

export const { showBooks , addBook, deleteBook, updateBook } = booksSlice.actions
export default booksSlice.reducer