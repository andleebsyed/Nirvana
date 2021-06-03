import axios from "axios";
export function checkForIdInPlaylist(playlist, videoId) {
  console.log(
    "list of videos in our playlist ",
    playlist,
    " and video id being ",
    videoId
  );
  const ifPresent = playlist.filter((item) => item.id === videoId);
  return ifPresent.length > 0 ? true : false;
}

export function setupAuthHeaderForServiceCalls(token) {
  if (token) {
    console.log(
      "i am called with token ",
      { token },
      "and now after this eacgh rewuet will have token"
    );
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  console.log("token nahi aaraha delete krna padega");
  delete axios.defaults.headers.common["Authorization"];
}
