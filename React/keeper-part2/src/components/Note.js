import React from 'react';

const Note = (props) => {
    // let title = "This is the note title";
    // let content ="This is the note content";

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;