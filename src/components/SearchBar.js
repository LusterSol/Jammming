import React, { useState } from 'react';
import './SearchBar.css';
import search from '../external-resources/images/search.png';

export const SearchBar = () => {
    const [input, setInput] = useState('');

    const fetchData = (value) => {
///////////////////////////////////////////////////
    };

    return (
        <>
            <div className='input-wrapper'>
                <img src={search} alt='search-icon' id='search-icon' />
                <input placeholder='Type to search...' value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
        </>
    )
};