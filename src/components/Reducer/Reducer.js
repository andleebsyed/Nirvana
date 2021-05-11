import { useReducer, useContext, createContext } from 'react'

const VideoHandleContext = createContext();

function videosHandler(state, { type, payload }) {
    const { likedVideos } = state
    switch (type) {
        case 'ADD_TO_LIKED_VIDEOS':
            return { ...state, likedVideos: [...likedVideos, payload] }
        case 'REMOVE_FROM_LIKED_VIDEOS':
            return { ...state, likedVideos: likedVideos.filter(video => video.id !== payload.id) }
    }
}

export function DataProvider({ children }) {

    const likedVideos = []
    const watchLaterVideos = []
    const [state, dispatch] = useReducer(videosHandler, { likedVideos, watchLaterVideos })
    return (
        <VideoHandleContext.Provider value={{ state, dispatch }}>
            {children}
        </VideoHandleContext.Provider>
    )
}

export function useVideoData() {
    return useContext(VideoHandleContext);
}