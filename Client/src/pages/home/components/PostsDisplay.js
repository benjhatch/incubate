import React from 'react';

import Post from './Post';

function PostsDisplay(props) {
    return (
        <div className='posts-display'>
            {props.posts.map(post => { 
                return <Post key={post.title} 
                title={post.title}
                author={post.author} /> 
            })}
        </div>
    );
}

export default PostsDisplay;