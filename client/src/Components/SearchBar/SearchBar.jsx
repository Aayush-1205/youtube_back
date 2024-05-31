// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className='w-full'>
            <h2 className='font-semibold mb-2'>Search Groups</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, description, or members..."
                className="w-[50rem] px-3 py-2 mb-2 rounded-md bg-[#121212]"
            />
            <button className='px-5 py-2 bg-[#121212] text-white rounded-md font-semibold my-5' onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
