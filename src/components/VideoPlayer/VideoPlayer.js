import './VideoPlayer.css'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { useVideo } from '../Data/Data'
export function VideoPlayer() {
    const { id } = useParams()
    const { videos } = useVideo()
    const currentVideo = videos.filter(video => video.id === id)
    const video = currentVideo[0];
    return (
        <div className="outer-main">
            <div className="player-card">
                <div className="player">
                    <ReactPlayer
                        url={video.url}
                        controls={true}
                    />
                </div>
                <button>Like</button>
                <button>Add to Watch Later</button>
            </div>




        </div>
    )
}