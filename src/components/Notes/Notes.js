import "./Notes.css";
import { useState, useEffect } from "react";
import { AddNote, GetNotes } from "../ApiCalls/Notes";
export function Notes({ video }) {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    async function ApiCall() {
      const videoId = video._id;
      const response = await GetNotes(videoId);
      response ? setNotes([...response]) : setNotes([]);
    }
    ApiCall();
  }, []);
  console.log("video  which we have is ", video);

  async function notesHandler(e) {
    const dataToApi = { note: e.target.value, videoId: video._id };
    const response = await AddNote(dataToApi);
    console.log("response in notes comp ", response);
    setNotes([...notes, e.target.value]);
    // e.currentTarget.value = "";
  }
  function deleteHandler(note) {
    // const tempNotes = [...notes]
    setNotes(notes.filter((item) => item !== note));
  }
  return (
    <div className="notes-outer">
      <p className="notes-heading">Fill Your Bucket List...</p>
      <div className="notes">
        {notes.map((note) => (
          <div className="individual-note">
            <p className="note-text">{note}</p>
            <button className="delete-note" onClick={() => deleteHandler(note)}>
              X
            </button>
          </div>
        ))}
      </div>
      <input
        className="notes-input-box"
        type="text"
        placeholder="Type here..."
        onKeyPress={(e) => (e.key === "Enter" ? notesHandler(e) : "do nothing")}
      />
    </div>
  );
}
