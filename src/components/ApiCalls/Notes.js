import axios from "axios";
export async function AddNote(dataToAPi) {
  try {
    const response = await axios.post(
      "https://video-library-api.andydev7.repl.co/notes/add",
      dataToAPi
    );
    return response;
  } catch (error) {
    console.log("Error occureed ", error.message);
  }
}

export async function GetNotes(dataToAPi) {
  try {
    const response = await axios.post(
      "https://video-library-api.andydev7.repl.co/notes/all",
      dataToAPi
    );
    return response.data.notes;
  } catch (error) {
    console.log("Error occureed ", error.message);
  }
}

export async function DeleteNote(dataToAPi) {
  try {
    const response = await axios.post(
      "https://video-library-api.andydev7.repl.co/notes/delete",
      dataToAPi
    );
    return response.status;
  } catch (error) {
    console.log("Error occureed ", error.message);
  }
}
