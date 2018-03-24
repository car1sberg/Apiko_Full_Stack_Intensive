import React from 'react';
import PropTypes from 'prop-types';
import '../styles/post.css';

function Post(props) {
    const posts = props.arr;
    return (
        <div className="postsBlock">
            <ul className="list-group ulWidth">
                {posts.map(item => <li className="list-group-item item" key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    )
}

Post.propTypes = {
    arr: PropTypes.array
}

export default Post;