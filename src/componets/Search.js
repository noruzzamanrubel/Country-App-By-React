import React, { useState, useEffect } from 'react'

const Search = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }
    useEffect(() => {
        props.onSearch(searchInput);
    }, [searchInput]);
    return (
        <div className='search-wrapper'>
            <input
                type="text"
                placeholder="Search Country"
                value={searchInput}
                onChange={handleChange}
            />
        </div>
    )
}

export default Search