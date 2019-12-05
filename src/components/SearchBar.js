import React from 'react';

const SearchBar = ({onSearchChange, searchWithEnterKey, onSubmitSearch}) => {

    return (
        <div id="search-box-wrapper">
            <input onChange={onSearchChange} onKeyPress={searchWithEnterKey} placeholder="Enter hero's name..." type="text" id="search-box-input"></input>
            <button id="search-box-button" onClick={onSubmitSearch}>Search</button>
        </div>
    )
}

export default SearchBar;