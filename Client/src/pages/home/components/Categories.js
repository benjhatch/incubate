import React from 'react';

function Categories() {
    return (
        <div className='categories'>
            <h2 className='category-header'>Explore: Trending cubes and more</h2>
            <div className='sorting-options'>
                <span className='option-header'>Sort by</span>
                <select className='dropdown'>
                    <option value="mercedes">Newest</option>
                    <option value="volvo">Most Viewed</option>
                    <option value="saab">Most Liked</option>
                    <option value="audi">Controversial</option>
                </select>
            </div>
            <div>
                <h5 className='category'>Trending</h5>
                <h5 className='category'>Issues</h5>
                <h5 className='category'>Following</h5>
                <h5 className='category'>Groups</h5>
                <h5 className='category'>Controversial</h5>
                <h5 className='category'>Editor's Choice</h5>
            </div>
        </div>
    );
}

export default Categories;