import React from 'react';

import Nav from './components/Nav';
import Search from './components/Search';
import Categories from './components/Categories';
import PostsDisplay from './components/PostsDisplay';

import './css/App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Search />
        <Categories />
        <PostsDisplay posts={[{ title: 'iPhone X Thoughts', author: '@Ben_Hatch24' }]}  />
      </div>
    </div>
  );
}

export default App;
