import React from 'react';
import Search from './components/Search';
import Categories from './components/Categories';
import PostsDisplay from './components/PostsDisplay';

function Home() {
    return (
        <div className="content">
            <Search />
            <Categories />
            <PostsDisplay posts={[{ title: 'iPhone X Thoughts', author: '@Ben_Hatch24' }]}  />
        </div>
    );
}

export default Home;