import React from 'react';
import Post from './post';
import NoItemsFound from './no-items-found';
import SearchField from './search-field';
import DisplayPostsBtn from './display-posts-btn';
import { CSSTransitionGroup } from 'react-transition-group';
import Loading from './loader';
import '../styles/post-list.css';

const URL = 'https://jsonplaceholder.typicode.com/';

const getData = (data) => 
    fetch(URL + data).then(resp => resp.json());

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 10,
            searchingPosts: '',
            postsArr: [],
            isLoading: true
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

    componentDidMount() {
        setTimeout(() => {
            getData('posts').then((posts, loading) => this.setState({
                postsArr: posts,
                isLoading: false
            }));
        }, 2000)
        
    }

    render() {
        const {postsArr, isLoading} = this.state;
        const currentLength = this.state.counter;
        const posts = postsArr.slice(0, currentLength);
        const filteredPosts = posts.filter((post) => 
            post.title.toLowerCase().includes(this.state.searchingPosts.toLowerCase()));

        if (isLoading) {
            return <Loading />
        }

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
                        transitionEnterTimeout={800}
                        transitionLeaveTimeout={100}
                        transitionAppearTimeout={800}>
                        <NoItemsFound />
                    </CSSTransitionGroup>
                }

                {postsArr.length - currentLength >= 1 &&
                    <DisplayPostsBtn displayMore={this.handleClick} />
                }
            </div>
        )
    }
}

export default PostList;