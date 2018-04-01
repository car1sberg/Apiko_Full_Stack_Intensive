
import React from 'react';
import PropTypes from 'prop-types';

const SearchField = (props) => {
    return (
        <input type="text"
            placeholder="Search posts..."
            className="form-control" 
            onChange={props.upgView} />
    )
}

SearchField.propTypes = {
    upgView: PropTypes.func
}

export default SearchField;