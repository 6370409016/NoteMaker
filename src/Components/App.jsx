import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../Notes";



function App() {
    return (
        <div>
            <Header />
            {notes.map((createNote) => {
                return (
                    <Note
                        key={createNote.key}
                        name={createNote.title}
                        content={createNote.content}
                    />
                )

            })}
            <Footer />
        </div>
    )
}

export default App;