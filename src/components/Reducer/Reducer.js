import {
  useReducer,
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";
import { GetVideos, GetLikedVideos } from "../ApiCalls/ApiCalls";
import { useAuth } from "./AuthReducer";
const VideoHandleContext = createContext();

function videosHandler(state, { type, payload }) {
  const { likedVideos, playlists, originalVideos } = state;
  switch (type) {
    case "INITIAL_VIDEOS_RENDER":
      return {
        ...state,
        videos: payload.videos,
        originalVideos: payload.videos,
      };
    case "INITIAL_LIKED_VIDEOS_RENDER":
      return {
        ...state,
        likedVideos: payload.userLikedVideos,
      };
    case "ADD_TO_LIKED_VIDEOS":
      return { ...state, likedVideos: [...likedVideos, payload.video] };

    case "REMOVE_FROM_LIKED_VIDEOS":
      return {
        ...state,
        likedVideos: likedVideos.filter(
          (video) => video.id !== payload.video.id
        ),
      };
    case "ADD_NEW_PLAYLIST":
      return {
        ...state,
        playlists: [...playlists, { name: payload.name, list: [] }],
      };
    case "REMOVE_PLAYLIST":
      return {
        ...state,
        playlists: playlists.filter(
          (playlist) => playlist.name !== payload.playlist.name
        ),
      };
    case "ADD_TO_PLAYLIST":
      const tempPlaylists = [...playlists];
      // index which playlist to mess with
      const index = tempPlaylists.findIndex(
        (loopPlaylist) => payload.playlist.name === loopPlaylist.name
      );
      // update the playlist
      tempPlaylists[index] = {
        ...tempPlaylists[index],
        list: [...tempPlaylists[index].list, payload.video],
      };
      return { ...state, playlists: tempPlaylists };
    case "REMOVE_FROM_PLAYLIST":
      const tempPlaylistsRemove = [...playlists];
      const indexToRemoveFrom = tempPlaylistsRemove.findIndex(
        (loopPlaylist) => payload.playlist.name === loopPlaylist.name
      );
      const filteredVideos = tempPlaylistsRemove[indexToRemoveFrom].list.filter(
        (currentVideo) => currentVideo.id !== payload.video.id
      );
      tempPlaylistsRemove[indexToRemoveFrom] = {
        ...tempPlaylistsRemove[indexToRemoveFrom],
        list: filteredVideos,
      };
      return { ...state, playlists: tempPlaylistsRemove };
    case "FILTER_OUT_CATEGORIES":
      if (payload.category === "All") {
        console.log("see i am coming here");
        return { ...state, videos: originalVideos };
      } else
        return {
          ...state,
          videos: originalVideos.filter(
            (video) => video.category === payload.category
          ),
        };
    case "SEARCH_FOR_VIDEOS":
      return {
        ...state,
        videos: originalVideos.filter(
          (video) =>
            video.videoName
              .toLowerCase()
              .indexOf(payload.searchKeyword.toLowerCase()) === 0
        ),
      };
    case "CLEAR_STATE_ON_LOGOUT":
      // setUserIdTry(false);
      return { ...state, likedVideos: [], playlists: [] };
  }
}

export function DataProvider({ children }) {
  const { stateAuth } = useAuth();
  const likedVideos = [];
  const watchLaterVideos = [];
  const playlists = [{ name: "Watch Later", list: [] }];
  const videos = [];
  const originalVideos = [];
  const userId = localStorage.getItem("userId");
  //get all videos

  useEffect(() => {
    async function Apicall() {
      const videos = await GetVideos();
      dispatch({ type: "INITIAL_VIDEOS_RENDER", payload: { videos } });
    }
    Apicall();
  }, []);

  //get all liked videos for a particular user
  useEffect(() => {
    async function Apicall() {
      if (userId) {
        const userLikedVideos = await GetLikedVideos();
        dispatch({
          type: "INITIAL_LIKED_VIDEOS_RENDER",
          payload: { userLikedVideos },
        });
      }
    }
    Apicall();
  }, [stateAuth]);
  const [state, dispatch] = useReducer(videosHandler, {
    likedVideos,
    watchLaterVideos,
    playlists,
    videos,
    originalVideos,
  });
  return (
    <VideoHandleContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoHandleContext.Provider>
  );
}

export function useVideo() {
  return useContext(VideoHandleContext);
}
