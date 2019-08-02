import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='heading'>
            <Link to='/'><h1 className='title'>Incubate</h1></Link>
            <nav>
                <Link to='/profile'><span className='nav-link'>PROFILE</span></Link>
                <Link to='/post'><span className='nav-link'>POST</span></Link>
                <Link to='/library'><span className='nav-link'>LIBRARY</span></Link>
                <Link to='/about'><span className='nav-link'>ABOUT</span></Link>
            </nav>
        </div>
    )
}

export default Nav;