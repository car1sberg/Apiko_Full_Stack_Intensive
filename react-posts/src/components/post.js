import React from 'react';
import PropTypes from 'prop-types';
import '../styles/post.css';
import { CSSTransitionGroup } from 'react-transition-group';

function Post(props) {
    const posts = props.arr;
    return (
        <CSSTransitionGroup
            transitionName="postsOnload"
            transitionAppear={true}
            transitionAppearTimeout={700}
            transitionEnter={false}>

            <div className="postsBlock">
                <ul className="list-group ulWidth">
                    <CSSTransitionGroup
                        transitionName="postsIn"
                        transitionEnterTimeout={700}>

                        {posts.map(item => 
                            <li className="list-group-item item" 
                                key={item.id}
                                >{item.title}
                            </li>)}
                    </CSSTransitionGroup>
                </ul>
            </div>
        </CSSTransitionGroup>
    )
}

Post.propTypes = {
    arr: PropTypes.array
}

export default Post;