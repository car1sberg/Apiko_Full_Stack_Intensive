import React from 'react';
import data from '../json/posts';
import Post from './post';
import NoItemsFound from './no-items-found';
import SearchField from './search-field';
import DisplayPostsBtn from './display-posts-btn';
import { CSSTransitionGroup } from 'react-transition-group';
import '../styles/post-list.css';


class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 10,
            searchingPosts: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSearchUpgrade = this.handleSearchUpgrade.bind(this);
    }

    handleSearchUpgrade(event) {
        this.setState({searchingPosts: event.target.value});
    }

    handleClick() {
        this.setState({counter: this.state.counter + 10});
    }

    render() {
        const currentLength = this.state.counter;
        const posts = data.slice(0, currentLength);
        const filteredPosts = posts.filter((post) => 
            post.title.toLowerCase().indexOf(this.state.searchingPosts.toLocaleLowerCase()) !== -1);

        return (
            <div className="posts">
                <div className="searchBlock form-group">
                    <h4>Current amount: {filteredPosts.length}</h4>
                    <SearchField 
                        inputValue={this.state.searchingPosts} 
                        upgView={this.handleSearchUpgrade} />
                </div>
                <Post arr={filteredPosts} />
                
                {filteredPosts.length === 0 &&
                    <CSSTransitionGroup
                        transitionName="noResults"
                        transitionAppear={true}
                        transitionAppearTimeout={1000}>
                        <NoItemsFound />
                    </CSSTransitionGroup>
                }

                {data.length - currentLength >= 1 &&
                    <DisplayPostsBtn displayMore={this.handleClick} />
                }
            </div>
        )
    }
}

export default PostList;