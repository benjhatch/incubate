import React from 'react';
function Post(props) {
    return (
        <div className='post'>
            <div className='post-info'>
                <div className='post-cover'>
                    <span className='post-title'>{props.title}</span>
                    <span className='post-author'>By {props.author}</span>
                </div>
                <div className='post-stats'>
                    <span className='post-emoji' role="img" aria-label="heart">❤️</span>
                    <span className='post-emoji' role="img" aria-label="thumbs-up">👍</span>
                    <span className='post-emoji' role="img" aria-label="thumbs-down">👎</span>
                    <span className='post-emoji' role="img" aria-label="applaud">👏</span>
                    <span className='post-emoji' role="img" aria-label="laugh">😂</span>
                    <span className='post-emoji' role="img" aria-label="angry">😡</span>
                    <span className='post-emoji' role="img" aria-label="watching">👀</span>
                </div>
            </div>
            <div className='image-here'></div>
        </div>
    );
}

export default Post;