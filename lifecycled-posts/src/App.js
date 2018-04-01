import React, { Component } from 'react';
import PostList from './components/PostList';
import './App.css';
import Header from './components/stateless/Header';
import ToTopBtn from './components/stateless/ToTopBtn';

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