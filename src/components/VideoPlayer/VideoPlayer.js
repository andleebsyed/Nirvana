import './VideoPlayer.css'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { useVideo } from '../Data/Data'
import { useVideoData } from '../Reducer/Reducer'
export function VideoPlayer() {
    const { state, dispatch } = useVideoData()
    const { likedVideos } = state
    const { id } = useParams()
    const { videos } = useVideo()
    const currentVideo = videos.filter(video => video.id === id)
    const video = currentVideo[0];
    const videoInLiked = likedVideos.filter(videoInIteration => videoInIteration.id === video.id)
    return (
        <div className="outer-main">
            <div className="player-card">
                <div className="player">
                    <ReactPlayer
                        url={video.url}
                        controls={true}
                    />
                </div>
                {videoInLiked.length === 0 ?
                    <button onClick={() => dispatch({ type: 'ADD_TO_LIKED_VIDEOS', payload: video })}>Like</button>

                    :
                    <button onClick={() => dispatch({ type: 'REMOVE_FROM_LIKED_VIDEOS', payload: video })}>Dislike</button>
                }
                <button onClick={() => dispatch({ type: 'REMOVE_FROM_LIKED_VIDEOS', payload: video })}>Add to Watch Later</button>
            </div>




        </div>
    )
}