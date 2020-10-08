import React from 'react';

const SearchBox = (props) => {
    const { onSearchChange, onClickButton } = props;
    console.log(props);
    return (
        <div>
            <input type="text" placeholder="Search robot..."
                onChange={onSearchChange} />
            <button type="button" onClick={onClickButton}>Search</button>
        </div>
    )
}

export default SearchBox;