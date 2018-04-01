
import React from 'react';
import PropTypes from 'prop-types';


const SearchField = ({upgView}) => {
    return <input type="text"
                  placeholder="Search posts..."
                  className="form-control" 
                  onChange={upgView} />
}

SearchField.propTypes = {
    upgView: PropTypes.func
}

export default SearchField;