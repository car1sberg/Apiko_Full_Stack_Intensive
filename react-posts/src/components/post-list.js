import React from 'react';
import data from '../json/posts';
import Post from './post';
import DisplayPostsBtn from './display-posts-btn';
import '../styles/post-list.css';


class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {counter: 10};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({counter: this.state.counter + 10});
    }

    render() {
        const currentLength = this.state.counter;
        const posts = data.slice(0, currentLength);
        return (
            <div className="posts">
                <h4>Current amount: ({posts.length})</h4>
                <Post arr={posts}/>
                {data.length - currentLength >= 10 &&
                    <DisplayPostsBtn onClick={this.handleClick} />
                }
            </div>
        )
    }
}

export default PostList;