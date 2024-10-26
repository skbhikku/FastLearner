import React from 'react'
import navbar from '../Styles/navbar.css'
import Books from './Books';
import Home from './Home';
function Navbar(props) {
    return (
        <>
            <div className='navbar'>
                <nav className="navbar navbar-expand-lg bg-tertiary fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand nav nav-pills" href="/"><strong>fast</strong>Learner</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/books">Books
                                    </a>
                                </li>
                            </ul>
            
                        </div>
                    </div>
                </nav >

            </div >
            {/* <Home  /> */}
        </>
    )
}
export default Navbar;
