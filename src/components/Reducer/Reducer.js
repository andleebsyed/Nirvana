import { useReducer, useContext, createContext, useEffect } from 'react'
import { allVideos } from '../Data/Data'
const VideoHandleContext = createContext();

function videosHandler(state, { type, payload }) {
    const { likedVideos, playlists, videos } = state
    switch (type) {
        case 'INITIAL_VIDEOS':
            return { ...state, videos: [...videos, payload.videos] }
        case 'ADD_TO_LIKED_VIDEOS':
            return { ...state, likedVideos: [...likedVideos, payload] }
        case 'REMOVE_FROM_LIKED_VIDEOS':
            return { ...state, likedVideos: likedVideos.filter(video => video.id !== payload.id) }
        case 'ADD_NEW_PLAYLIST':
            return { ...state, playlists: [...playlists, { name: payload.name, list: [] }] }
        case 'ADD_TO_PLAYLIST':
            const tempPlaylists = [...playlists]
            const index = tempPlaylists.findIndex(loopPlaylist => payload.playlist.name === loopPlaylist.name)
            tempPlaylists[index] = { ...tempPlaylists[index], list: [...tempPlaylists[index].list, payload.videoId] }
            return { ...state, playlists: tempPlaylists }
        case 'REMOVE_FROM_PLAYLIST':
            const tempPlaylistsRemove = [...playlists]
            const indexToRemoveFrom = tempPlaylistsRemove.findIndex(loopPlaylist => payload.playlist.name === loopPlaylist.name)
            const addedVideos = tempPlaylistsRemove[indexToRemoveFrom].list.filter(currentId => currentId !== payload.videoId)
            const whatToPassToList = addedVideos.length > 0 ? addedVideos : [];
            tempPlaylistsRemove[indexToRemoveFrom] = { ...tempPlaylistsRemove[indexToRemoveFrom], list: whatToPassToList }
            return { ...state, playlists: tempPlaylistsRemove }

    }
}

export function DataProvider({ children }) {

    const likedVideos = []
    const watchLaterVideos = []
    const playlists = [{ name: 'Add to Watch Later', list: [] }];
    const videos = allVideos
    const [state, dispatch] = useReducer(videosHandler, { likedVideos, watchLaterVideos, playlists, videos })
    return (
        <VideoHandleContext.Provider value={{ state, dispatch }}>
            {children}
        </VideoHandleContext.Provider>
    )
}

export function useVideo() {
    return useContext(VideoHandleContext);
}