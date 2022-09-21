import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddBook from '../Features/Books/AddBook';
import BooksView from '../Features/Books/BooksView';
import EditBook from '../Features/Books/EditBook';
import Footer from '../Layouts/Footer';
import Nav from '../Layouts/Nav';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

const Main = () => {
    return (
        <div>
            <Nav/>
            <main>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/show-books" element={<BooksView/>} />
                    <Route path="/add-book" element={<AddBook/>} />
                    <Route path="/edit-book" element={<EditBook/>} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </main>
            <Footer/>
        </div>
    );
};

export default Main;