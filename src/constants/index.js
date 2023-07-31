import { TfiThought } from 'react-icons/tfi';
import { VscSignIn, VscSignOut } from 'react-icons/vsc';
import { FcAbout } from 'react-icons/fc'

export const navLinks = [
    {
        id: "about",
        title: "About",
        icon: <FcAbout/>
    },
    {
        id: "thoughts",
        title: "Thoughts",icon:<TfiThought />
    },

    {
        id: 'login', title: 'Login',icon:<VscSignIn/>
    },
    {
        id: 'signup', title: 'Signup',icon:<VscSignOut/>
    },
];