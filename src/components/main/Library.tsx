import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Book as BookType, addBook } from '../../redux_rtk/librarySlice'
import Book from './Book';
import { RootState } from '../../redux_rtk/storeRTK';

const Library = () => {
    const books = useSelector((state: RootState) => state.library.books)
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');

    const handleAddBook = () => {
        const newBook: Omit<BookType, 'isbn'> = { // omit: bedeutet: newBook wird so typisiert wie BookType ausser isbn!
            title,
            author,
            year: Number(year)
        };
        dispatch(addBook(newBook))
        setTitle(''); // Reset input fields after adding a book
        setAuthor('');
        setYear('');
    }

    return (
        <div className='libraryGeneral'>
            <div className='libraryDiv'>
                <div className='libraryComponent'>
                    <h2>Add book</h2>
                </div>
                <div className='libraryComponent'>
                    <label> Title: <input
                        type="text" placeholder='Titel...' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                    <label> Author: <input
                        type="text" placeholder='Author...' value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </label>
                    <label> Year: <input
                        type="text" placeholder='Year...' value={year} onChange={(e) => setYear(e.target.value)} />
                    </label>
                    <button onClick={handleAddBook}>Add book</button>
                </div>
                <div className='libraryComponent'><h3>Book List</h3></div>
                <div>
                    {books.map((book) => (
                        <div className='bookCard' key={book.isbn}>
                            <Book book={book} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Library


