import React, { useState, useEffect } from 'react';

function PostCreate() {
    const [title, setTitle] = useState('');
    const [height, setHeight] = useState("45px");

    function handleChange(e) {
        e.target.style.height = "45px";
        setHeight(e.target.scrollHeight);
        setTitle(e.target.value);
    }

    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <div className="create-container">
            <textarea style={{height: height}} className="create-title" placeholder="Title" value={title} onChange={handleChange} />
        </div>
    );
}

export default PostCreate;