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
const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false)
    return (
        <>
            <nav className='w-full flex items-center border border-sky-950 py-5  z-20'>
                <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                    <Link to='/'>
                        <image className='w-9 h-9 object-contain' alt='brand' />
                        <p className='text-white text-[18px] font-bold cursor-pointer flex'>YourThought
                        </p>

                    </Link>
                    <ul className='list-none hidden sm:flex flex-row gap-10  '>
                        {navLinks.map(nav => <li key={nav.id}>
                            <Link to={`/${nav.id}`}>{nav.title}</Link>
                        </li>)}
                    </ul>
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