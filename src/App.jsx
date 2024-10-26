import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={ <> <Navbar searchbar={false} /> <Home home={true}/> </>} />
                    {/* <Route path="/home" element={<><Navbar searchbar={false} /><Home /></>} /> */}
                    <Route path="/books" element={<><Navbar searchbar={true} /><Books /></>} />
                    {/* <Route path="/about" element={<><Navbar searchbar={false} /><About /></>} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
