import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books)
    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(deleteBook(id))
    }
    return (
        <div>
            <h2>List of books</h2>
            <table>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>Generic</th>
                        <th>Country</th>
                        <th>Actions</th>
                    </tr>
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
                            <td>{generic.length < 2 ? generic : generic.map(b=> <span key={b}>{b},</span>)}</td>
                            <td>{country}</td>
                            <td>
                                <Link to='/edit-book' state={{id, title, author, price, available, generic, country}}><button>Edit</button></Link>
                                <button onClick={()=>handleDelete(id)}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;