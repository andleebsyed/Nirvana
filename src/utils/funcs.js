export function checkForIdInPlaylist(playlistList, videoId) {
    console.log("list of videos in our playlist ", playlistList, " and video id being ", videoId)
    const ifPresent = playlistList.filter(item => item === videoId)
    console.log("should be ticked or not ", ifPresent.length)
    return ifPresent.length > 0 ? true : false
}