import React from 'react';
import {Editor, EditorState} from 'draft-js';

function PostCreate() {
    const [editorState, setEditorState] = React.useState(
        EditorState.createEmpty()
    );

    return (
        <div className="editor">
            <Editor
            editorState={editorState}
            onChange={setEditorState}
            />
        </div>
    );
}

export default PostCreate;