import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {

 const [notes, setNotes]=useState([]);

function addNotes(newNote){
    setNotes(prevNotes=>{
        return [...prevNotes, newNote]
    })
}

function deleteNote(id){
    setNotes(prevNotes=>{
       return prevNotes.filter((noteItem, index)=>{
            return index !== id;
        })
    })
}
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNotes}/>
             {notes.map((noteElement, index)=>{
                return <Note key={index} id={index} title={noteElement.title} content={noteElement.content} onDelete={deleteNote}/>
             })}
            <Footer />
        </div>
    )
}

export default App;