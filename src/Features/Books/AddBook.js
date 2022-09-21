import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';

const AddBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState(0)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const numberOfBooks = useSelector(state => state.booksReducer.books.length)

    const handleSubmit = (e) => {
        e.preventDefault()
        const available = e.target.available.value || 'no'
        const a = e.target.a.checked
        const b = e.target.b.checked
        const c = e.target.c.checked
        const d = e.target.d.checked
        let generic = []

        if (a === true){
            generic.push(e.target.a.value)
        } 
        if (b === true){
            generic.push(e.target.b.value)
        } 
        if (c === true){
            generic.push(e.target.c.value)
        } 
        if (d === true){
            generic.push(e.target.d.value)
        } 
        const country = e.target.country.value

        const book = { id: numberOfBooks + 1 , title, author, price, available, generic, country}
        dispatch(addBook(book))
        navigate('/show-books', {replace : true})
    }

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title: </label>
                    <input className="input-group" type="text" name="title" id="title" defaultValue={title} onChange={e => setTitle(e.target.value)} required />
                </div>
                <div className="form-field">
                    <label htmlFor="author">Author: </label>
                    <input className="input-group" type="text" name="author" id="author" defaultValue={author} onChange={e => setAuthor(e.target.value)} required />
                </div>
                <div className="form-field">
                    <label htmlFor="price">Price: </label>
                    <input className="input-group" type="number" name="price" id="price" defaultValue={price} onChange={e => setPrice(e.target.value)} required />
                </div>
                <div className="form-field">
                    <label htmlFor="available">Available: </label>
                    <input className='input-radio' required type="radio" name="available" id="yes" value='yes' />
                    <label htmlFor="yes" >Yes</label>
                    <input className='input-radio' required type="radio" name="available" id="no" value='no' />
                    <label htmlFor="no" >No</label>
                </div>
                <div className="form-field">
                    <label htmlFor="generic">Generic: </label>
                    <input className='input-radio' type="checkbox" name="a" id="generic" value="a" />
                    <label htmlFor="a">A</label>
                    <input className='input-radio' type="checkbox" name="b" id="b" value="b" />
                    <label htmlFor="b">B</label>
                    <input className='input-radio' type="checkbox" name="c" id="c" value="c" />
                    <label htmlFor="c">C</label>
                    <input className='input-radio'  type="checkbox" name="d" id="d" value="d" />
                    <label htmlFor="d">D</label>                
                </div>

                <div className="form-field">
                    <label htmlFor="title">Country: </label>
                    <select className="border p-2 rounded-xl border-blue-300" name="country" id="country">
                            <option className='p-5 bg-slate-300' value="native">Native</option>
                            <option className='p-5 bg-slate-300' value="foreigner">Foreigner</option>
                        </select>
                </div>

                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;