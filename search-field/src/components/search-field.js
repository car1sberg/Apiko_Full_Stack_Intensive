
import React from 'react';
import PropTypes from 'prop-types';

const SearchField = (props) => {
    return (
        <input type="text"
            placeholder="Search posts..."
            value={props.inputValue}
            className="form-control" 
            onChange={props.upgView} />
    )
}

SearchField.propTypes = {
    inputValue: PropTypes.string,
    upgView: PropTypes.func
}

export default SearchField;