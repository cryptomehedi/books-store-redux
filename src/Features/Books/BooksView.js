import React from 'react';
import { useSelector } from 'react-redux';

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books)
    console.log(books);
    return (
        <div>
            <h2>List of books</h2>
            <table>
                <thead>
                    <th>SL</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Available</th>
                    <th>Generic</th>
                    <th>Country</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {books && books.map((book, i) =>{
                        const {id , title, author, price, available, country,generic} = book;
                        return <tr key={i}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{author}</td>
                            <td>{price}</td>
                            <td>{available}</td>
                            <td>{generic}</td>
                            <td>{country}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;