import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Book as BookType, deleteBook, editBook } from '../../redux_rtk/librarySlice'

interface BookProps {
    book: BookType;
}

const Book: FC<BookProps> = ({ book }) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [year, setYear] = useState<number>(book.year);

    const handleSaveBook = () => {
        const updatedBook = { ...book, title, author, year };
        dispatch(editBook(updatedBook))
        setIsEdit(false);
    }

    const handleDeleteBook = () => {
        dispatch(deleteBook(book.isbn))
    };

    const handleEditBook = () => {
        setIsEdit(true)
    }

    return (
        <div>
            {isEdit ? (
                <> <div className='bookEditMenu'>
                    <div> <input
                        type="text" placeholder='Titel...' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div> <input
                        type="text" placeholder='Author...' value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <div> <input
                        type="text" placeholder='Year...' value={year} onChange={(e) => setYear(Number(e.target.value))} />
                    </div>
                    <button onClick={handleSaveBook}> Save </button>
                </div>
                </>
            ) : (
                <>
                    <div className='book'>
                        <div className='bookData'>
                            <div><h4>{book.title}</h4></div>
                            <div><p> by {book.author}</p></div>
                            <div><p>{book.year}</p></div>
                        </div>
                        <div><button onClick={handleEditBook}>Edit</button></div>
                        <div><button onClick={handleDeleteBook}>Delete</button></div>
                    </div>
                </>)}
        </div>
    )
}

export default Book
