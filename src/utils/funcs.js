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
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  delete axios.defaults.headers.common["Authorization"];
}

export function setupAuthExceptionHandler(navigate, dispatchAuth) {
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        console.log("unauthorized i am ");
        dispatchAuth({ type: "LOGOUT_USER" });
        navigate("login");
      }
      return Promise.reject(error);
    }
  );
}
