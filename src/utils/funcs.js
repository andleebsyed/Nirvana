export function checkForIdInPlaylist(playlist, videoId) {
  console.log(
    "list of videos in our playlist ",
    playlist,
    " and video id being ",
    videoId
  );
  const ifPresent = playlist.filter((item) => item.id === videoId);
  console.log("should be ticked or not ", ifPresent.length);
  return ifPresent.length > 0 ? true : false;
}
