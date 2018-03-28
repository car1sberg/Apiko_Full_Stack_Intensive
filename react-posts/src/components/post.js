import React from 'react';
import PropTypes from 'prop-types';
import '../styles/post.css';
import { CSSTransitionGroup } from 'react-transition-group';

function Post(props) {
    const posts = props.arr;
    return (
        <div className="postsBlock">
            <ul className="list-group ulWidth">
                <CSSTransitionGroup
                    transitionName="postsIn"
                    transitionAppear={true}
                    transitionAppearTimeout={700}
                    transitionEnterTimeout={700}>

                    {posts.map(item => 
                        <li className="list-group-item item" 
                            key={item.id}
                            >{item.title}
                        </li>)}
                </CSSTransitionGroup>
            </ul>
        </div>
    )
}

Post.propTypes = {
    arr: PropTypes.array
}

export default Post;