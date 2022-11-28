import './Header.css';
import React from 'react';
import MaxWidth from '../UI/MaxWidth/MaxWidth';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <header className='main-header'>
            <MaxWidth>
                <Navigation />
            </MaxWidth>
        </header>
    )
}

export default Header