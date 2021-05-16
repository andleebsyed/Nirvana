import './Notes.css'
import { useState } from 'react'
export function Notes() {
    const [notes, setNotes] = useState([])
    function notesHandler(e) {
        setNotes([...notes, e.target.value])
        e.currentTarget.value = "";
    }
    function deleteHandler(note) {
        // const tempNotes = [...notes]
        setNotes(notes.filter(item => item !== note))
    }
    return (

        <div className="notes-outer">
            <p className="notes-heading">Fill Your Bucket List...</p>
            <div className="notes">

                {notes.map(note => <div className="individual-note">
                    <p className="note-text">{note}</p>
                    <button className="delete-note" onClick={() => deleteHandler(note)}>X</button>
                </div>)}
            </div>
            <input className="notes-input-box" type="text" placeholder="Type here..." onKeyPress={(e) => e.key === 'Enter' ? notesHandler(e) : 'do nothing'} />


        </div>
    )
}