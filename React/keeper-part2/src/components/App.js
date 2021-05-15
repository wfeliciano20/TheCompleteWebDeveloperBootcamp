import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';

const App = () => {
    return <div>
        <Header />
        {notes.map(note =>
            <Note 
            key ={note.id}
            title={note.title} 
            content = {note.content}
            />
        )}
        <Footer />

    </div>;
};

export default App;

/*
    first I need to add the props to Note.js
    Then loop over the notes array with map and 
    create the Note components
*/