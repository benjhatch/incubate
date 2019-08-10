import React, { useEffect, useState, useRef } from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

function PostCreate() {
    const [isEditing, setEditing] = useState(true);
    const [editorState, setEditorState] = useState(
        EditorState.createEmpty()
    );
    const editorRef = useRef();

    useEffect(() => {
        if (isEditing) {
            editorRef.current.focus();
        } else {
            editorRef.current.blur();
        }
    }, [isEditing])

    function handleEnter() {
        setEditing(false);
    }

    
    return (
        <div className="create-title">
            <Editor
            editorState={editorState}
            handleReturn={handleEnter}
            onChange={setEditorState}
            ref={editorRef}
            placeholder="Title your idea"
            />
        </div>
    );
}

export default PostCreate;