import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Post.css';
import { CSSTransitionGroup } from 'react-transition-group';


class Post extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.arr !== nextProps.arr;
    }

    render() {
        return (
            <div className="postsBlock">
                <ul className="list-group ulWidth">
                    <CSSTransitionGroup
                        transitionName="postsIn"
                        transitionAppear={true}
                        transitionAppearTimeout={700}
                        transitionEnterTimeout={700}
                        transitionLeaveTimeout={500}>

                        {this.props.arr.map(item => 
                            <li className="list-group-item item" 
                                key={item.id}
                                >{item.title}
                            </li>)}
                    </CSSTransitionGroup>
                </ul>
            </div>
        )
    }
}

Post.propTypes = {
    arr: PropTypes.array
}

export default Post;