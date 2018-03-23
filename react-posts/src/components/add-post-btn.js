
import React from 'react';

function AddPostBtn(props) {
    return (
        <div className="button">
            <button 
                className="btn btn-outline-dark addPostsBtn" 
                onClick={props.onClick}
                >Add more posts
            </button>
        </div>
    )
}

export default AddPostBtn;