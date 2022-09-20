import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books: [
        {id:1 , title: "what is love", author: "ananto" , available: 'yes', price: 80 , generic:['a'] , country: "native"},
        {id:2 , title: "what is heart", author: "ananto" , available: 'yes', price: 80 , generic:['a'] , country: "native"},
        {id:3 , title: "what is para", author: "ananto" , available: 'yes', price: 80 , generic:['a'] , country: "native"},
    ]
}

export const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
    }
})

export const {showBooks} = booksSlice.actions
export default booksSlice.reducer