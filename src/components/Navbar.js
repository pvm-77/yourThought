import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// const Navbar = () => {
//     const [user,setUser]=useState(null);
//     const handleLogout=()=>{
//         console.log('loggin out')
//     }
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg bg-light">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">YourThought</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">

//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/about">About</Link>
//                             </li>

//                             {user === null ? '' : <><li className="nav-item">
//                                 <Link className="nav-link" to='/createNewThought'>AddThought</Link>
//                             </li></>}
//                             <li className="nav-item">
//                                 <a className="nav-link" href='/thoughts'>thoughts</a>
//                             </li>
//                         </ul>
//                         <ul className='navbar-nav justify-content-right'>
//                             {
//                                 (user === null) ? <>
//                                     <li className='nav-item mx-2'>
//                                         <Link className='navlink' to='/signup'>Sign Up</Link>
//                                     </li>
//                                     <li className='nav-item mx-2'>
//                                         <Link className='navlink' to='/login'>login</Link>
//                                     </li></> : <>
//                                     <li className='nav-item mx-2'>
//                                         <Link className='navlink' to='/profile'>profile</Link>
//                                     </li>
//                                     <li className='nav-item mx-2'>
//                                         <button className='btn btn-success' onClick={handleLogout} >logout</button>
//                                     </li></>
//                             }




//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }
// import {close,menu} from '../assets'
import { navLinks } from '../constants';
import menu from '../menu.svg';
import close from '../close.svg'
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext, useEffect } from 'react';
const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false)
    const { theme, toggleTheme } = useContext(ThemeContext);
    useEffect(() => {
        document.documentElement.style.colorScheme = theme
    }, [theme]);
    return (
        <>
            <nav className=' top-0 mb-3 w-full flex items-center border bg-gray-800 border-sky-950 py-2   z-20'>
                <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                    <Link to='/'>
                        {/* <img className='w-9 h-9 object-contain' src='some' alt='brand' /> */}
                        <p className='text-white text-[18px] font-bold cursor-pointer flex'>YourThought
                        </p>

                    </Link>
                    <ul className='list-none hidden sm:flex flex-row gap-10  '>
                        {navLinks.map(nav => <li key={nav.id}>
                            <Link to={`/${nav.id}`}>{nav.title}</Link>
                        </li>)}
                    </ul>

                    {
                        theme === 'dark' ?

                            <div className="flex">
                                <button
                                    type="button"
                                    aria-label="Use Dark Mode"
                                    onClick={() => {
                                        toggleTheme('dark');
                                    }}
                                    className="active:scale-95 transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link">
                                    < BsFillMoonFill style={{ color: 'yellow', width: '16px', height: '16px' }} />
                                </button>
                            </div>


                            : <div className="flex">
                                <button
                                    type="button"
                                    aria-label="Use Light Mode"
                                    onClick={() => {
                                        toggleTheme('light');
                                    }}
                                    className="active:scale-95 transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link">
                                    <BsFillSunFill style={{ color: 'yellow', width: '16px', height: '16px' }} />

                                </button>
                            </div>

                    }




                    <div className='sm:hidden flex flex-1 justify-end items-center'>
                        <img
                            className='w-[28px] h-[28px]  object-contain'
                            src={toggle ? close : menu} alt='menu'
                            onClick={() => setToggle(!toggle)}
                        />
                        <div
                            className={`${!toggle ? "hidden" : "flex"
                                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                        >
                            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                                {navLinks.map((nav) => (
                                    <li
                                        key={nav.id}
                                        className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                                            }`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(nav.title);
                                        }}
                                    >
                                        <a href={`/${nav.id}`}>{nav.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar