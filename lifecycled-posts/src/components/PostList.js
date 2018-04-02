import React from 'react';
import Post from './Post';
import NoItemsFound from './stateless/NoItemsFound';
import SearchField from './stateless/SearchField';
import DisplayPostsBtn from './stateless/DisplayPostsBtn';
import { CSSTransitionGroup } from 'react-transition-group';
import Loader from './stateless/Loader';
import '../styles/PostList.css';


const URL = 'https://jsonplaceholder.typicode.com/';
const getData = (data) => 
    fetch(URL + data).then(resp => resp.json());

class PostList extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 10,
            inputValue: '',
            postsArr: [],
            isLoading: true
        };

        this.handleDisplayMore = this.handleDisplayMore.bind(this);
        this.handleSearchUpgrade = this.handleSearchUpgrade.bind(this);
    }

    handleSearchUpgrade(event) {
        this.setState({inputValue: event.target.value});
    }

    handleDisplayMore() {
        this.setState({counter: this.state.counter + 10});
    }

    componentDidMount() {
        setTimeout(() => {
            getData('posts').then((posts) => this.setState({
                postsArr: posts,
                isLoading: false
            }));
        }, 2000)

        setInterval(() => {
            getData('posts').then((posts) => this.setState({
                postsArr: posts,
            }));
        }, 20000)
    }

    render() {
        const {postsArr, isLoading, counter, inputValue} = this.state;
        const posts = postsArr.slice(0, counter);
        const filteredPosts = posts.filter((post) => 
            post.title.toLowerCase().includes(inputValue.toLowerCase()));

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