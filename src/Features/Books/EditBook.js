import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const EditBook = () => {

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const book = location.state
    const [id] = useState(book.id)
    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [price, setPrice] = useState(book.price)
    const [available, setAvailable] = useState(book.available)
    const [generic] = useState(book.generic)
    const [country, setCountry] = useState(book.country)

    
    const handleSubmit = (e) => {
        e.preventDefault()
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
        
        dispatch(updateBook({id, title, author, price, available, generic, country}))
        navigate('/show-books', {replace : true})
    }
    return (
        <div>
            <h2>Edit Book</h2>
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
                    <label htmlFor="available" >Available: </label>
                    <input className='input-radio' defaultChecked={available === 'yes'} onChange={e => setAvailable(e.target.value)} required type="radio" name="available" id="yes" value='yes' />
                    <label htmlFor="yes" >Yes</label>
                    <input className='input-radio' defaultChecked={available === 'no'} onChange={e => setAvailable(e.target.value)} required type="radio" name="available" id="no" value='no' />
                    <label htmlFor="no" >No</label>
                </div>
                <div className="form-field">
                    <label htmlFor="generic">Generic: </label>
                    <input className='input-radio' defaultChecked={generic.find(g=> g==="a")} type="checkbox" name="a" id="a" value="a" />
                    <label htmlFor="a">A</label>
                    <input className='input-radio' defaultChecked={generic.find(g=> g==="b")} type="checkbox" name="b" id="b" value="b" />
                    <label htmlFor="b">B</label>
                    <input className='input-radio' defaultChecked={generic.find(g=> g==="c")} type="checkbox" name="c" id="c" value="c" />
                    <label htmlFor="c">C</label>
                    <input className='input-radio' defaultChecked={generic.find(g=> g==="d")} type="checkbox" name="d" id="d" value="d" />
                    <label htmlFor="d">D</label>
                </div>

                <div className="form-field">
                    <label htmlFor="title">Country: </label>
                    <select onChange={e => setCountry(e.target.value)} className="border p-2 rounded-xl border-blue-300" name="country" id="country">
                        <option defaultSelected={country ==="native"} value="native">Native</option>
                        <option defaultSelected={country ==="foreigner"} value="foreigner">Foreigner</option>
                    </select>
                </div>

                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditBook;