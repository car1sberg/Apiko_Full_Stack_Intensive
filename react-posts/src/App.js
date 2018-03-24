import React, { Component } from 'react';
import PostList from './components/post-list';
import './App.css';
import Header from './components/header';
import ToTopBtn from './components/to-top-btn';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PostList />
        <ToTopBtn />
      </div>
    );
  }
}

export default App;
