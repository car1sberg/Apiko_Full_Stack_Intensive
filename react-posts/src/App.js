import React, { Component } from 'react';
import PostList from './components/post-list';
import './App.css';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PostList />
      </div>
    );
  }
}

export default App;
