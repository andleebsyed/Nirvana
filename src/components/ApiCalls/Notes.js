import axios from "axios";
export async function AddNote(dataToAPi) {
  try {
    console.log("data to send to serfver");
    const response = await axios.post(
      "https://video-library-api.andydev7.repl.co/notes/add",
      dataToAPi
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error occureed ", error.message);
  }
}

export async function GetNotes(videoId) {
  try {
    const data = { videoId };
    console.log("data to send to serfver", videoId);
    const response = await axios.post(
      "https://video-library-api.andydev7.repl.co/notes/all",
      data
    );
    console.log(response);
    return response.data.notes;
  } catch (error) {
    console.log("Error occureed ", error.message);
  }
}
