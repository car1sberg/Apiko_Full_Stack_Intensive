import React from 'react';
import Post from './post';
import NoItemsFound from './no-items-found';
import SearchField from './search-field';
import DisplayPostsBtn from './display-posts-btn';
import { CSSTransitionGroup } from 'react-transition-group';
import Loader from './loader';
import '../styles/post-list.css';


const URL = 'https://jsonplaceholder.typicode.com/';
const getData = (data) => 
    fetch(URL + data).then(resp => resp.json());

class PostList extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 10,
            searchingPosts: '',
            postsArr: [],
            isLoading: true
        };

        this.handleDisplayMore = this.handleDisplayMore.bind(this);
        this.handleSearchUpgrade = this.handleSearchUpgrade.bind(this);
    }

    handleSearchUpgrade(event) {
        this.setState({searchingPosts: event.target.value});
    }

    handleDisplayMore() {
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

    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.state.counter !== nextState.counter || 
            this.state.counter === nextState.counter
        )
    }

    render() {
        const {postsArr, isLoading, counter} = this.state;
        const posts = postsArr.slice(0, counter);
        const filteredPosts = posts.filter((post) => 
            post.title.toLowerCase().includes(this.state.searchingPosts.toLowerCase()));

        if (isLoading) {
            return <Loader />
        }

        return (
            <div className="posts">
                <div className="searchBlock form-group">
                    <h4>Current amount: {filteredPosts.length}</h4>
                    <SearchField upgView={this.handleSearchUpgrade} />
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

                {postsArr.length - counter >= 1 &&
                    <DisplayPostsBtn displayMore={this.handleDisplayMore} />
                }
            </div>
        )
    }
}

export default PostList;