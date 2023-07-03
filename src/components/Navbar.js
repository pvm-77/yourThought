import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [user,setUser]=useState(null);
    const handleLogout=()=>{
        console.log('loggin out')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">YourThought</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            {user === null ? '' : <><li className="nav-item">
                                <Link className="nav-link" to='/createNewThought'>AddThought</Link>
                            </li></>}
                            <li className="nav-item">
                                <a className="nav-link" href='/thoughts'>thoughts</a>
                            </li>
                        </ul>
                        <ul className='navbar-nav justify-content-right'>
                            {
                                (user === null) ? <>
                                    <li className='nav-item mx-2'>
                                        <Link className='navlink' to='/signup'>Sign Up</Link>
                                    </li>
                                    <li className='nav-item mx-2'>
                                        <Link className='navlink' to='/login'>login</Link>
                                    </li></> : <>
                                    <li className='nav-item mx-2'>
                                        <Link className='navlink' to='/profile'>profile</Link>
                                    </li>
                                    <li className='nav-item mx-2'>
                                        <button className='btn btn-success' onClick={handleLogout} >logout</button>
                                    </li></>
                            }




                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar