import React from 'react';

function Nav() {
    return (
        <div className='heading'>
            <h1 className='title'>Incubate</h1>
            <nav>
                <span className='nav-link'>PROFILE</span>
                <span className='nav-link'>POST</span>
                <span className='nav-link'>RECENT</span>
                <span className='nav-link'>LIBRARY</span>
                <span className='nav-link'>ABOUT</span>
            </nav>
        </div>
    )
}

export default Nav;