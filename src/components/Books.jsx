import React, { useState, useEffect } from 'react';
import '../Styles/navbar.css';

function Books() {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("nature");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch books when the component mounts or when searchQuery changes
        const fetchBooks = async () => {
            setLoading(true); // Set loading to true before fetching
            const allBooks = []; // Initialize an array to store all fetched books
            for (let i = 0; i < 4; i++) {
                const startIndex = i * 40;
                const newBooks = await fetchAndDisplayBooks(searchQuery, startIndex);
                allBooks.push(...newBooks); // Append new books to the allBooks array
            }
            setBooks(allBooks); // Set all fetched books in state
            setLoading(false); // Set loading to false after fetching is complete
        };

        fetchBooks();
    }, [searchQuery]); // Fetch books whenever searchQuery changes

    const fetchAndDisplayBooks = async (query, startIndex) => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${process.env.REACT_APP_PASSKEY}&maxResults=40&startIndex=${startIndex}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.items || []; // Return the fetched books
        } catch (error) {
            console.error("Error fetching data:", error);
            return []; // Return empty array on error
        }
    };

    const handleSearch = () => {
        const query = document.getElementById("bookname-inp").value.trim();
        if (query) {
            setBooks([]); // Clear previous results
            setSearchQuery(query); // Update search query state
        } else {
            alert("Please enter a book name.");
        }
    };

    return (
        <div className="booksContainer">
            <div className="searchBar d-flex">
                <input
                    className="form-control me-2"
                    id="bookname-inp"
                    type="text"
                    placeholder="Search for a book"
                    aria-label="Search"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <button
                    className="btn btn-outline-success"
                    id="search-btn"
                    type="button" // Prevent form submission
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            {loading && (
                <div className="spinner-border loading" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            <h5 className='text-uppercase blinkings'>NOT_FOR_SALE indicates that the content is available for free reading on Google.</h5>
            <div className="row" style={{ marginTop: '60px' }}>
                {books.map((book, index) => (
                    <div key={index} className="col-md-3">
                        <div className="card" style={{ width: '18rem', margin: '10px' }}>
                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
                                className="card-img-top"
                                alt="Book"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{book.volumeInfo.title || "No title available"}..</h5>
                                <p className="card-text">
                                    {book.volumeInfo.description?.substring(0, 60) || "No description available"}...
                                </p>
                                <p className='card-text'>
                                    {book.saleInfo.saleability}
                                </p>
                                <a
                                    href={book.volumeInfo.infoLink || "#"}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer" // For security
                                >
                                    More Info
                                </a>
                                <p>{book.volumeInfo.publishedDate || "Unknown"}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Books;
