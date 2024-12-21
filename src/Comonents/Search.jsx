import React, { useState } from 'react';

export default function Search({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div>
            <input className='input'
                type="text"
                placeholder="Search rooms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}
