import React from 'react'
import { Link } from 'react-router-dom'


const ButtonLink = ({ to, className, children, type = 'primary', size = 'md', target = '_self', ...props }) => {
    return (
        <Link {...props} target='' aria-label='' className='' to={to}>
        </Link>
    )
}

export default ButtonLink