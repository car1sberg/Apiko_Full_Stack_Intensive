
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/display-posts-btn.css';


function DisplayPostsBtn(props) {
    return (
        <div className="button">
            <button 
                className="btn btn-outline-dark addPostsBtn" 
                onClick={props.onClick}
                >Display more posts
            </button>
        </div>
    )
}

DisplayPostsBtn.propTypes = {
    onClick: PropTypes.func
}

export default DisplayPostsBtn;